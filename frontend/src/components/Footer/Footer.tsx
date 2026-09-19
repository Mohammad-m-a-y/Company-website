import { Link } from 'react-router-dom';

import { useCompany } from '../../contexts/Company';

import styles from './Footer.module.css';

import {
    FaInstagram,
    FaTelegram,
    FaLinkedinIn,
    FaXTwitter,
} from 'react-icons/fa6';



function Footer() {
    const { company } = useCompany();

    const hasSocialLinks =
        company?.instagram ||
        company?.telegram ||
        company?.linkedin ||
        company?.twitter;

    return (
        <footer className={styles.footer}>
            <div className="container">

                <div className={styles.footerMain}>

                    <div className={styles.company}>
                        <Link to="/" className={styles.logo}>
                            {company?.name}
                        </Link>

                        <p className={styles.description}>
                            {company?.site_slogan}
                        </p>

                        {company?.address && (
                            <div className={styles.address}>
                                <span className={styles.addressLabel}>
                                    آدرس
                                </span>

                                <p>
                                    {company.address}
                                </p>
                            </div>
                        )}
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

                    {hasSocialLinks && (
                        <div className={styles.social}>
                            <h3 className={styles.title}>
                                ما را دنبال کنید
                            </h3>

                            <div className={styles.socialLinks}>

                                {company?.instagram && (
                                    <a
                                        href={company.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram />
                                    </a>
                                )}

                                {company?.telegram && (
                                    <a
                                        href={company.telegram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Telegram"
                                    >
                                        <FaTelegram />
                                    </a>
                                )}

                                {company?.linkedin && (
                                    <a
                                        href={company.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                )}

                                {company?.twitter && (
                                    <a
                                        href={company.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Twitter"
                                    >
                                        <FaXTwitter />
                                    </a>
                                )}

                            </div>
                        </div>

                    )}

                </div>


                <div className={styles.footerBottom}>
                    <p>
                        © 2026 {company?.name ?? 'ریواکس'}. تمامی حقوق محفوظ است.
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