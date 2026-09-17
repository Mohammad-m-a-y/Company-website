import { Link } from 'react-router-dom';

import styles from './Footer.module.css';
import {
    FaInstagram,
    FaTelegramPlane,
    FaLinkedinIn,
} from 'react-icons/fa';


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">

                <div className={styles.footerMain}>

                    <div className={styles.company}>
                        <Link to="/" className={styles.logo}>
                            ریواکس
                        </Link>

                        <p className={styles.description}>
                            تولیدکننده روغن و گریس صنعتی با تمرکز بر
                            کیفیت، عملکرد و اعتماد در همکاری.
                        </p>
                    </div>


                    <div className={styles.links}>
                        <h3 className={styles.title}>
                            دسترسی سریع
                        </h3>

                        <nav>
                            <Link to="/">خانه</Link>
                            <Link to="/about">درباره ما</Link>
                            <Link to="/contact">تماس با ما</Link>
                        </nav>
                    </div>


                    <div className={styles.social}>
                        <h3 className={styles.title}>
                            ما را دنبال کنید
                        </h3>

                        <div className={styles.socialLinks}>
                            <a href="#" aria-label="Instagram">
                                <FaInstagram />
                            </a>

                            <a href="#" aria-label="Telegram">
                                <FaTelegramPlane />
                            </a>

                            <a href="#" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                </div>


                <div className={styles.footerBottom}>
                    <p>
                        © 2026 ریواکس. تمامی حقوق محفوظ است.
                    </p>

                    <span>
                        تولیدکننده روغن و گریس صنعتی
                    </span>
                </div>

            </div>
        </footer>
    );
}

export default Footer;