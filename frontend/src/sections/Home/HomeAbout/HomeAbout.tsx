import { Link } from 'react-router-dom';

import heroImage from '../../../assets/hero.png';

import styles from './HomeAbout.module.css';

function HomeAbout() {
  return (
    <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className={styles.sectionEyebrow}>
                درباره ریواکس
              </span>

              <h2>
                همراه مطمئن صنعت
              </h2>

              <p>
                ریواکس با تمرکز بر تولید و ارائه روغن‌ها و گریس‌های
                صنعتی، در مسیر تأمین روانکارهای باکیفیت و قابل اعتماد
                برای صنایع مختلف فعالیت می‌کند.
              </p>

              <p>
                کیفیت محصولات، شناخت نیاز مشتری و نگاه بلندمدت به
                همکاری، از اصولی است که ریواکس بر پایه آن فعالیت می‌کند.
              </p>

              <Link
                to="/about"
                className={styles.aboutButton}
              >
                بیشتر درباره ما
              </Link>
            </div>

            <div className={styles.aboutImageWrapper}>
              <img
                src={heroImage}
                alt="ریواکس - تولید روغن و گریس صنعتی"
                className={styles.aboutImage}
              />

              <div className={styles.aboutAccent} />
            </div>
          </div>
        </div>
      </section>
  );
}

export default HomeAbout;