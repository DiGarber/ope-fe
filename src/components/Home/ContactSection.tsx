import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  containerStyles,
  textStyles,
  inputStyles,
  buttonStyles,
} from "../../styles/components";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import api from "../../services/axios";

interface ContactFormData {
  fullName: string;
  email: string;
  linkedin: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    linkedin: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock API call - replace with actual endpoint
  const submitForm = async (data: ContactFormData) => {
    const response = await api.post("/contact", data);
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: submitForm,
    onSuccess: () => {
      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", linkedin: "", message: "" });
      setErrors({});
    },
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      mutation.mutate(formData);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section
        className={containerStyles.section}
        aria-label="Contact form success"
      >
        <div className={containerStyles.base}>
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className={`${textStyles.heading2} mb-4`}>Thank You!</h2>
            <p className={`${textStyles.subtitle} mb-8`}>
              Your message has been sent successfully. We'll get back to you as
              soon as possible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className={buttonStyles.secondary}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={containerStyles.section} aria-label="Contact form">
      <div className={containerStyles.base}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`${textStyles.heading2} mb-8`}>
              Don't Wait For The Next Breach
            </h2>
            <p className={`${textStyles.subtitle} mb-4`}>
              We're here to support your business. Whether you want to learn
              more about our services,
            </p>
            <p className={textStyles.subtitle}>
              explore collaboration opportunities, or need guidance, our team is
              ready to help you strengthen your open source security.
            </p>
          </div>

          {/* Contact Form */}
          <div className="text-center mb-12">
            <h3 className={`${textStyles.heading3} mb-4`}>Get In Touch</h3>
            <p className={textStyles.body}>
              This is so that we can get in contact with you in case any
              opportunity comes up
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-6"
            noValidate
          >
            {/* Full Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your Full Name"
                  className={
                    errors.fullName ? inputStyles.error : inputStyles.base
                  }
                  aria-describedby={
                    errors.fullName ? "fullName-error" : undefined
                  }
                  aria-invalid={!!errors.fullName}
                  required
                />
                {errors.fullName && (
                  <p
                    id="fullName-error"
                    className="mt-1 text-sm text-red-500 flex items-center"
                  >
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className={
                    errors.email ? inputStyles.error : inputStyles.base
                  }
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                  required
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-sm text-red-500 flex items-center"
                  >
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* LinkedIn */}
            <div>
              <label
                htmlFor="linkedin"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your LinkedIn
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                placeholder="Your LinkedIn"
                className={inputStyles.base}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message..."
                className={
                  errors.message ? inputStyles.error : inputStyles.base
                }
                aria-describedby={errors.message ? "message-error" : undefined}
                aria-invalid={!!errors.message}
                required
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1 text-sm text-red-500 flex items-center"
                >
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={mutation.isPending}
                className={`${buttonStyles.primary} inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label="Send message"
              >
                {mutation.isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send</span>
                  </>
                )}
              </button>
            </div>

            {/* Error Message */}
            {mutation.isError && (
              <div className="text-center">
                <p className="text-red-500 flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Failed to send message. Please try again.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
