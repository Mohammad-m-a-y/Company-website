import { Link } from 'react-router-dom';

import styles from './Contact.module.css';

function Contact() {
    return (
        <section className={styles.contact}>
            <div className="container">
                <div className={styles.contactContent}>

                    {/* <span className={styles.eyebrow}>
                        ارتباط با ریواکس
                    </span> */}

                    <h2 className={styles.title}>
                        آماده همکاری
                        <br />
                        <span>با ریواکس هستید؟</span>
                    </h2>

                    <p className={styles.description}>
                        برای دریافت اطلاعات بیشتر درباره محصولات و
                        شیوه های همکاری، با ما در ارتباط باشید.
                    </p>

                    <Link
                        to="/contact"
                        className={styles.button}
                    >
                        تماس با ما
                    </Link>

                </div>
            </div>
        </section>
    );
}

export default Contact;