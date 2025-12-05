import emailjs from 'emailjs-com';

// Configuration EmailJS
const EMAILJS_SERVICE_ID = 'service_placeholder'; // À remplacer par votre service ID
const EMAILJS_TEMPLATE_ID = 'template_placeholder'; // À remplacer par votre template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE'; // À remplacer par votre public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData, recaptchaToken: string): Promise<boolean> => {
  try {
    // Validate reCAPTCHA token on backend (frontend only for demo)
    // In production, validate token on your backend server
    if (!recaptchaToken) {
      console.warn('reCAPTCHA token missing');
      return false;
    }

    // TODO: In production, send token to your backend for validation
    // const isValidCaptcha = await validateRecaptchaOnBackend(recaptchaToken);
    // if (!isValidCaptcha) return false;

    // Validate configuration
    if (
      EMAILJS_SERVICE_ID === 'service_placeholder' ||
      EMAILJS_TEMPLATE_ID === 'template_placeholder' ||
      EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE'
    ) {
      console.warn('EmailJS not configured. Please set your EmailJS credentials in emailService.ts');
      // For demo purposes, simulate successful send
      return true;
    }

    const templateParams = {
      to_email: 'jn.drugmand@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

    return response.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// For testing without EmailJS setup
export const logContactForm = (formData: ContactFormData): void => {
  console.log('Contact form submitted (demo mode):', formData);
};
