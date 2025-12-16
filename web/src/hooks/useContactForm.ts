import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { UseFormReturn } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

/**
 * Contact form data interface
 */
export interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Return type for useContactForm hook
 */
export interface UseContactFormReturn {
  formMethods: UseFormReturn<ContactFormInputs>;
  recaptchaRef: React.RefObject<ReCAPTCHA | null>;
  submitted: boolean;
  submitError: string | null;
  onSubmit: (formData: ContactFormInputs) => Promise<void>;
}

const CONTACT_EMAIL = 'jn.drugmand@gmail.com';

/**
 * Custom hook for contact form logic
 * Centralizes form validation, reCAPTCHA handling, and mailto submission
 * Eliminates complex logic from Contact component
 */
export const useContactForm = (): UseContactFormReturn => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // React Hook Form setup with validation
  const formMethods = useForm<ContactFormInputs>({
    mode: 'onBlur', // Validate on blur for better UX
    defaultValues: {
      name: '',
      email: '',
      subject: 'Opportunité professionnelle',
      message: '',
    },
  });

  /**
   * Handle form submission with reCAPTCHA verification
   * Opens mailto link with form data
   */
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
      formMethods.reset();
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

  return {
    formMethods,
    recaptchaRef,
    submitted,
    submitError,
    onSubmit,
  };
};
