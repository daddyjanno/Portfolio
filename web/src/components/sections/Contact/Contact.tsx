import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { Button } from '../../common/Button/Button';
import { SUBJECT_OPTIONS } from '../../../utils/constants';
import styles from './Contact.module.scss';

// Form field interfaces
interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Email contact
const CONTACT_EMAIL = 'jn.drugmand@gmail.com';

export const Contact = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // React Hook Form setup with validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    mode: 'onBlur', // Validate on blur for better UX
    defaultValues: {
      name: '',
      email: '',
      subject: 'Opportunité professionnelle',
      message: '',
    },
  });

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmit = async (formData: ContactFormInputs) => {
    setSubmitError(null);

    // Verify reCAPTCHA
    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      setSubmitError('Veuillez vérifier le reCAPTCHA pour continuer.');
      return;
    }

    try {
      // Build mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      const body = encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\nSujet: ${formData.subject}\n\n${formData.message}`
      );
      const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

      // Open mailto link
      window.location.href = mailtoLink;

      // Show success state
      setSubmitted(true);
      reset();
      recaptchaRef.current?.reset();

      // Auto-reset success state after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (err) {
      console.error('Error with mailto link:', err);
      setSubmitError('Une erreur est survenue. Veuillez réessayer.');
      recaptchaRef.current?.reset();
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
          {/* Contact Form with React Hook Form */}
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Nom complet <span className={styles.required}>*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jean Dupont"
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                {...register('name', {
                  required: 'Le nom est requis',
                  minLength: { value: 2, message: 'Le nom doit contenir au moins 2 caractères' },
                  maxLength: { value: 100, message: 'Le nom ne doit pas dépasser 100 caractères' },
                })}
              />
              {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
            </div>

            {/* Email Field */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email <span className={styles.required}>*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="vous@example.com"
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                {...register('email', {
                  required: 'L\'email est requis',
                  pattern: {
                    value: emailRegex,
                    message: 'Veuillez entrer une adresse email valide',
                  },
                })}
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
            </div>

            {/* Subject Field */}
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                Sujet <span className={styles.required}>*</span>
              </label>
              <select
                id="subject"
                className={`${styles.select} ${errors.subject ? styles.inputError : ''}`}
                {...register('subject', {
                  required: 'Veuillez sélectionner un sujet',
                })}
              >
                {SUBJECT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.subject && <span className={styles.errorMessage}>{errors.subject.message}</span>}
            </div>

            {/* Message Field */}
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                placeholder="Votre message..."
                rows={5}
                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                {...register('message', {
                  required: 'Le message est requis',
                  minLength: { value: 10, message: 'Le message doit contenir au moins 10 caractères' },
                  maxLength: { value: 5000, message: 'Le message ne doit pas dépasser 5000 caractères' },
                })}
              />
              {errors.message && <span className={styles.errorMessage}>{errors.message.message}</span>}
            </div>

            {/* reCAPTCHA v2 - Checkbox */}
            <div className={styles.recaptchaContainer}>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="large"
              disabled={submitted || isSubmitting}
              className={submitted ? styles.successButton : ''}
            >
              {submitted ? '✓ Formulaire ouvert dans votre client email!' : isSubmitting ? 'Traitement...' : 'Envoyer le message'}
            </Button>

            {/* Error Message */}
            {submitError && (
              <div className={styles.errorAlert}>
                <span>⚠</span>
                <span>{submitError}</span>
              </div>
            )}

            {/* Success Message */}
            {submitted && (
              <div className={styles.successAlert}>
                <span>✓</span>
                <span>Votre client email s\'est ouvert avec votre message!</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
