import { Link } from 'react-router-dom';

import heroImage from '../../../assets/hero.png';

import styles from './Hero.module.css';


function Hero(){
    return(
        <section
        className={styles.hero}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className={styles.overlay} />

        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              تولیدکننده روغن و گریس صنعتی
            </span>

            <h1>
              کیفیت، قدرت
              <br />
              <span>اعتماد</span>
            </h1>

            <p>
              ریواکس؛ همراه مطمئن صنایع در تأمین روانکارهای باکیفیت
            </p>

            <div className={styles.actions}>
              <Link
                to="/about"
                className={styles.primaryButton}
              >
                درباره ما
              </Link>

              <Link
                to="/contact"
                className={styles.secondaryButton}
              >
                تماس با ما
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Hero