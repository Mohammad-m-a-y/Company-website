import styles from './Contact.module.css';
import { useState } from 'react';
import { sendContactMessage } from '../../services/contactService';
import Modal from '../../components/Modal/Modal';
import type { ContactFormData } from '../../types/Contact';
import { useCompany } from '../../contexts/Company';


function Contact() {

  const { company } = useCompany();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const validateForm = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    const phone = formData.phone.trim();

    if (!formData.name.trim()) {
      newErrors.name = 'لطفاً نام خود را وارد کنید.';
    }

    if (!phone) {
    newErrors.phone = 'لطفاً شماره تماس خود را وارد کنید.';
} else if (!/^(0|\+98)\d{10}$/.test(phone)) {
    newErrors.phone =
        'لطفاً یک شماره موبایل یا تلفن ثابت معتبر وارد کنید.';
}

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'لطفاً یک ایمیل معتبر وارد کنید.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'لطفاً موضوع پیام را وارد کنید.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'لطفاً متن پیام را وارد کنید.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        'متن پیام باید حداقل ۱۰ کاراکتر باشد.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactMessage(formData);

      setIsSuccessModalOpen(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      alert('خطا در ارسال پیام')
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <>
      <section className={styles.contact}>
        <div className="container">

          <div className={styles.intro}>
            <span className={styles.eyebrow}>
              ارتباط با ریواکس
            </span>

            <h1 className={styles.title}>
              با ما در ارتباط باشید
            </h1>

            <p className={styles.description}>
              برای دریافت اطلاعات بیشتر درباره محصولات و
              خدمات ریواکس، می‌توانید با ما در ارتباط باشید.
            </p>
          </div>


          <div className={styles.contactGrid}>

            <div className={styles.contactInfo}>
              <h2>
                راه‌های ارتباطی
              </h2>

              <p className={styles.infoDescription}>
                برای ارتباط مستقیم با ریواکس می‌توانید از
                شماره‌های زیر استفاده کنید.
              </p>

              <div className={styles.contactMethods}>

                <a
                  href="tel:+989121234567"
                  className={styles.contactMethod}
                >
                  <span className={styles.methodIcon}>
                    ☎
                  </span>

                  <div>
                    <span className={styles.methodLabel}>
                      تلفن ثابت
                    </span>

                    <span className={styles.methodValue}>
                      {company?.phone}
                    </span>
                  </div>
                </a>


                <a
                  href="tel:+989121234567"
                  className={styles.contactMethod}
                >
                  <span className={styles.methodIcon}>
                    ✆
                  </span>

                  <div>
                    <span className={styles.methodLabel}>
                      موبایل
                    </span>

                    <span className={styles.methodValue}>
                      {company?.mobile}
                    </span>
                  </div>
                </a>

              </div>
            </div>

            <div className={styles.contactForm}>
              <h2>
                ارسال پیام
              </h2>

              <p className={styles.formDescription}>
                پیام خود را برای ما ارسال کنید. کارشناسان ریواکس
                در اولین فرصت با شما تماس خواهند گرفت.
              </p>

              <form className={styles.form} onSubmit={handleSubmit}>

                <div className={styles.formRow}>

                  <div className={styles.field}>
                    <label htmlFor="name">
                      نام و نام خانوادگی
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="نام خود را وارد کنید"
                      className={errors.name ? styles.inputError : ''}
                    />
                    {errors.name && (
                      <span className={styles.error}>
                        {errors.name}
                      </span>
                    )}
                  </div>


                  <div className={styles.field}>
                    <label htmlFor="phone">
                      شماره تماس
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                      className={errors.name ? styles.inputError : ''}
                    />
                    {errors.phone && (
                      <span className={styles.error}>
                        {errors.phone}
                      </span>
                    )}
                  </div>

                </div>


                <div className={styles.formRow}>

                  <div className={styles.field}>
                    <label htmlFor="email">
                      ایمیل(اختیاری)
                    </label>

                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className={errors.name ? styles.inputError : ''}
                    />
                    {errors.email && (
                      <span className={styles.error}>
                        {errors.email}
                      </span>
                    )}
                  </div>


                  <div className={styles.field}>
                    <label htmlFor="subject">
                      موضوع
                    </label>

                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="موضوع پیام"
                      className={errors.name ? styles.inputError : ''}
                    />
                    {errors.subject && (
                      <span className={styles.error}>
                        {errors.subject}
                      </span>
                    )}
                  </div>

                </div>


                <div className={styles.field}>
                  <label htmlFor="message">
                    پیام
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="پیام خود را بنویسید..."
                    className={errors.name ? styles.inputError : ''}
                  />

                  {errors.message && (
                    <span className={styles.error}>
                      {errors.message}
                    </span>
                  )}
                </div>


                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
                </button>

              </form>
            </div>

          </div>

        </div>
      </section>

      <Modal
        isOpen={isSuccessModalOpen}
        title="پیام با موفقیت ارسال شد"
        onClose={() => setIsSuccessModalOpen(false)}
      >
        پیام شما با موفقیت دریافت شد.
        کارشناسان ریواکس در اولین فرصت با شما تماس خواهند گرفت.
      </Modal>

    </>
  );
}

export default Contact;