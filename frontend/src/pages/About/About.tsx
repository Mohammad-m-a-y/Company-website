import styles from './About.module.css';
import image from '../../assets/hero.png';

function About() {
  return (
    <>
      <section className={styles.aboutHero}>
        <div className="container">
          <div className={styles.heroContent}>

            <span className={styles.eyebrow}>
              درباره ریواکس
            </span>

            <h1 className={styles.title}>
              همراه مطمئن
              <br />
              <span>صنعت</span>
            </h1>

            <p className={styles.description}>
              آشنایی با ریواکس، رویکرد ما و مسیری که برای
              ارائه روانکارهای باکیفیت و قابل اعتماد دنبال می‌کنیم.
            </p>

          </div>
        </div>
      </section>

      <section className={styles.introduction}>
        <div className="container">
          <div className={styles.introductionGrid}>

            <div className={styles.imageWrapper}>
              <img
                src={image}
                alt="محیط صنعتی"
                className={styles.image}
              />

              <div className={styles.imageAccent} />
            </div>


            <div className={styles.content}>

              <span className={styles.eyebrow}>
                معرفی ریواکس
              </span>

              <h2>
                تمرکز بر کیفیت،
                <br />
                <span>اعتماد در همکاری</span>
              </h2>

              <p>
                ریواکس با تمرکز بر تولید و ارائه روغن‌ها و
                گریس‌های صنعتی، در مسیر تأمین روانکارهای
                باکیفیت و قابل اعتماد برای صنایع مختلف
                فعالیت می‌کند.
              </p>

              <p>
                شناخت نیاز مشتری، توجه به کیفیت محصولات و
                نگاه بلندمدت به همکاری، از اصولی است که
                ریواکس بر پایه آن فعالیت می‌کند.
              </p>

            </div>

          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <span className={styles.eyebrow}>
              ارزش‌های ما
            </span>

            <h2 className={styles.valuesTitle}>
              اصولی که بر پایه آن
              <br />
              <span>حرکت می‌کنیم</span>
            </h2>
          </div>

          <div className={styles.valuesGrid}>
            <article className={styles.valueItem}>
              <span className={styles.valueNumber}>01</span>

              <div className={styles.valueContent}>
                <h3>کیفیت</h3>

                <p>
                  کیفیت محصولات و توجه به عملکرد، یکی از
                  اصول اصلی ریواکس در مسیر تولید و ارائه
                  روانکارهای صنعتی است.
                </p>
              </div>
            </article>

            <article className={styles.valueItem}>
              <span className={styles.valueNumber}>02</span>

              <div className={styles.valueContent}>
                <h3>اعتماد</h3>

                <p>
                  شفافیت، تعهد و مسئولیت‌پذیری را پایه‌ای
                  برای ایجاد روابط حرفه‌ای و قابل اعتماد
                  با مشتریان خود می‌دانیم.
                </p>
              </div>
            </article>

            <article className={styles.valueItem}>
              <span className={styles.valueNumber}>03</span>

              <div className={styles.valueContent}>
                <h3>همراهی بلندمدت</h3>

                <p>
                  هدف ما تنها ارائه محصول نیست؛ بلکه ایجاد
                  همکاری‌های پایدار و همراهی با مشتریان
                  در مسیر رشد و توسعه آن‌هاست.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.whatWeDo}>
        <div className="container">
          <div className={styles.whatWeDoHeader}>
            <div>
              <span className={styles.eyebrow}>
                حوزه فعالیت
              </span>

              <h2 className={styles.whatWeDoTitle}>
                آنچه در ریواکس
                <br />
                <span>انجام می‌دهیم</span>
              </h2>
            </div>

            <p className={styles.whatWeDoDescription}>
              ریواکس با تمرکز بر تولید روانکارهای صنعتی،
              تلاش می‌کند محصولاتی متناسب با نیاز صنایع
              مختلف ارائه دهد.
            </p>
          </div>

          <div className={styles.servicesList}>
            <article className={styles.serviceItem}>
              <span className={styles.serviceNumber}>01</span>

              <div className={styles.serviceContent}>
                <h3>تولید روغن‌های صنعتی</h3>

                <p>
                  ارائه روغن‌های صنعتی با تمرکز بر عملکرد،
                  پایداری و نیازهای مختلف تجهیزات و ماشین‌آلات.
                </p>
              </div>

              <span className={styles.serviceArrow}>←</span>
            </article>

            <article className={styles.serviceItem}>
              <span className={styles.serviceNumber}>02</span>

              <div className={styles.serviceContent}>
                <h3>تولید گریس‌های صنعتی</h3>

                <p>
                  تولید گریس‌های صنعتی برای کاربردهای مختلف
                  با هدف کاهش اصطکاک و افزایش عمر تجهیزات.
                </p>
              </div>

              <span className={styles.serviceArrow}>←</span>
            </article>

            <article className={styles.serviceItem}>
              <span className={styles.serviceNumber}>03</span>

              <div className={styles.serviceContent}>
                <h3>راهکارهای روانکاری</h3>

                <p>
                  ارائه راهکارهای مناسب روانکاری با توجه به
                  شرایط کاری و نیازهای هر مجموعه صنعتی.
                </p>
              </div>

              <span className={styles.serviceArrow}>←</span>
            </article>
          </div>
        </div>
      </section>

    </>
  );
}

export default About;