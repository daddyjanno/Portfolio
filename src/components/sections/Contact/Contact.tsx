import ReCAPTCHA from 'react-google-recaptcha';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useContactForm } from '../../../hooks/useContactForm';
import { Button } from '../../common/Button/Button';
import { SUBJECT_OPTIONS, VALIDATION } from '../../../utils/constants';
import styles from './Contact.module.scss';

export const Contact = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });
  const { formMethods, recaptchaRef, submitted, submitError, onSubmit } = useContactForm();

  // Extract form methods for cleaner code
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = formMethods;

  return (
    <section id="contact" className={styles.contact} ref={ref} role="region" aria-labelledby="contact-heading">
      <div className={styles.container}>
        <h2 id="contact-heading" className={styles.title}>Contact</h2>

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
                    value: VALIDATION.emailRegex,
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
              <label htmlFor="recaptcha" className={styles.label}>
                Vérification reCAPTCHA <span className={styles.required}>*</span>
              </label>
              <div id="recaptcha" role="group">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                />
              </div>
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
