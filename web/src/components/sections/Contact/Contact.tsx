import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { SUBJECT_OPTIONS } from '../../../utils/constants';
import styles from './Contact.module.scss';

export const Contact = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Opportunité professionnelle',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Get reCAPTCHA v3 token
      const recaptchaToken = await recaptchaRef.current?.executeAsync();
      if (!recaptchaToken) {
        setError('Erreur de validation reCAPTCHA. Veuillez réessayer.');
        setIsLoading(false);
        return;
      }

      // Import and use the email service
      const { sendContactEmail } = await import('../../../services/emailService');
      const success = await sendContactEmail(formData, recaptchaToken);

      if (success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: 'Opportunité professionnelle', message: '' });

        // Auto-reset after 4 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 4000);
      } else {
        setError("Erreur lors de l'envoi du message. Veuillez réessayer.");
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError("Erreur lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact</h2>

        {/* Contact Info */}
        <div className={styles.info}>
          <h3>Informations de contact</h3>

          <p className={styles.cta}>
            Vous avez un projet en tête ? <br />
            Discutons de la manière dont je peux vous aider à le concrétiser.
          </p>
        </div>

        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          {/* Contact Form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              label="Nom complet"
              name="name"
              type="text"
              placeholder="Jean Dupont"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="vous@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                Sujet <span className={styles.required}>*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.select}
                required
              >
                {SUBJECT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={styles.textarea}
                required
              />
            </div>

            {/* reCAPTCHA v3 - Invisible */}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              size="invisible"
            />

            <Button type="submit" variant="primary" size="large" disabled={submitted || isLoading}>
              {submitted
                ? '✓ Message envoyé!'
                : isLoading
                  ? 'Envoi en cours...'
                  : 'Envoyer le message'}
            </Button>

            {error && (
              <div
                style={{
                  color: 'var(--color-error)',
                  fontSize: '0.875rem',
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'center',
                }}
              >
                <span>⚠</span>
                <span>{error}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
