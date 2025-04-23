'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import styles from './Contact.module.scss';

interface FormData {
  name: string;
  email: string;
  emailSubject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  emailSubject?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    emailSubject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Entfernt den Fehler, wenn der Benutzer das Feld bearbeitet
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte Namen eintragen';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Bitte gültige Mail-Adresse eintragen';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ungültige Mail-Adresse';
    }

    if (!formData.emailSubject.trim()) {
      newErrors.emailSubject = 'Bitte Fachrichtung eintragen';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Bitte kurze Projektbeschreibung eintragen';
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/moqgvqpj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessageSent(true);
        setFormData({
          name: '',
          email: '',
          emailSubject: '',
          message: '',
        });
        setIsSubmitted(false);
        setErrors({});
        setTimeout(() => {
          setMessageSent(false);
        }, 3000);
      } else {
        console.error('Formularübermittlung fehlgeschlagen.');
      }
    } catch (error) {
      console.error('Fehler beim Übermitteln des Formulars:', error);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      {/* Logo-Wrapper */}

      <h2 className={styles.companyDescription}>Kontakt</h2>


      {/* Kontaktformular */}
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.inputBox}>
          <div className={styles.inputField}>
            <input
              type="text"
              name="name"
              placeholder="Vor- und Nachname"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} ${errors.name ? styles.invalid : ''}`}
              required
            />
            <span className={styles.focus}></span>
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

        </div>
        <div className={styles.inputBox}>

          <div className={styles.inputField}>
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.invalid : ''}`}
              required
            />
            <span className={styles.focus}></span>
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>
        </div>

        <div className={styles.inputBox}>
          <div className={styles.inputFieldFull}>
            <input
              type="text"
              name="emailSubject"
              placeholder="Fachrichtung"
              value={formData.emailSubject}
              onChange={handleChange}
              className={`${styles.input} ${errors.emailSubject ? styles.invalid : ''}`}
              required
            />
            <span className={styles.focus}></span>
            {errors.emailSubject && (
              <span className={styles.error}>{errors.emailSubject}</span>
            )}
          </div>
        </div>

        <div className={styles.textareaField}>
          <textarea
            name="message"
            placeholder="Projektbeschreibung"
            rows={10}
            value={formData.message}
            onChange={handleChange}
            className={`${styles.textarea} ${errors.message ? styles.invalid : ''}`}
            required
          ></textarea>
          <span className={styles.focus}></span>
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>

        <div className={styles.btnBox}>
          <button type="submit" className={styles.btn} disabled={isSubmitted}>
            Nachricht senden
          </button>
          <span className={styles.animateScroll} style={{ '--i': 9 } as React.CSSProperties}></span>
        </div>

        {messageSent && (
          <div className={styles.messageBox}>
            <p>Nachricht erfolgreich gesendet!</p>
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactSection;
