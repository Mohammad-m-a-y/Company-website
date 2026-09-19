import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './About.module.css';

import { getAboutDetail } from '../../services/aboutService';

import type { AboutDetail } from '../../types/About/AboutDetail';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import HeroTitle from '../../components/HeroTitle/HeroTitle';

import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';


function About() {

  const [aboutData, setAboutData] = useState<AboutDetail | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const data = await getAboutDetail();

        setAboutData(data);
      } catch (err) {
        console.error(err);

        setError(
          'خطا در دریافت اطلاعات درباره ما.'
        );
      } finally {
        setLoading(false);
      }
    }

  

    fetchAbout();
  }, []);


if (loading) {
  return <Loading />;
}


if (error) {
  return (
    <ErrorMessage
      message={error}
    />
  );
}

  
  return (
    <>
      <section className={styles.aboutHero}>
        <div
          className={styles.heroImage}
          style={{
            backgroundImage: aboutData?.about.hero_image
              ? `url(${aboutData.about.hero_image})`
              : undefined,
          }}
        />

        <div className={styles.heroOverlay} />

        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              درباره ریواکس
            </span>

            <HeroTitle title={aboutData?.about.hero_title ?? ''} />

            <p className={styles.description}>
              {aboutData?.about?.hero_description}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.introduction}>
        <div className="container">
          <div className={styles.introductionGrid}>

            {aboutData?.about?.image && (
              <div className={styles.imageWrapper}>

                <img
                  src={aboutData?.about.image}
                  alt={aboutData?.about.hero_title || "درباره ما"}
                  className={styles.image}
                />

                <div className={styles.imageAccent} />
              </div>
            )}


            <div className={styles.content}>

              <span className={styles.eyebrow}>
                معرفی ریواکس
              </span>

              <SectionTitle dark={true} title={aboutData?.about.intro_title ?? ''} />

              <p>
                {aboutData?.about?.intro}
              </p>


            </div>

          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <div className={styles.valuesBox}>

            <div className={styles.valuesHeader}>
              <span className={styles.eyebrow}>
                ارزش‌های ما
              </span>

              <SectionTitle
                dark={true}
                title="اصولی که بر پایه آن
حرکت می‌کنیم"
              />
            </div>

            <div className={styles.valuesGrid}>

              {aboutData?.values.map((value, index) => (
                <article
                  key={value.id}
                  className={styles.valueItem}
                >
                  <span className={styles.valueNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className={styles.valueContent}>
                    <h3>
                      {value.title}
                    </h3>

                    <p>
                      {value.description}
                    </p>
                  </div>
                </article>
              ))}

            </div>

          </div>
        </div>
      </section>

      <section className={styles.whatWeDo}>
        <div className={styles.container}>
          <div className={styles.whatWeDoHeader}>
            <span className={styles.eyebrow}>
              حوزه فعالیت
            </span>

            <SectionTitle
              dark={false}
              title={`آنچه در ریواکس
            انجام می‌دهیم`}
            />

            <p className={styles.whatWeDoDescription}>
              ریواکس با تمرکز بر تولید روانکارهای صنعتی،
              تلاش می‌کند محصولاتی متناسب با نیاز صنایع
              مختلف ارائه دهد.
            </p>
          </div>
          <div className={styles.servicesList}>
            <div className={styles.servicesList}>

              {aboutData?.services.map((service, index) => (
                <article
                  key={service.id}
                  className={styles.serviceItem}
                >
                  <span className={styles.serviceNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className={styles.serviceContent}>
                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>
                  </div>

                  <span className={styles.serviceArrow}>
                    ←
                  </span>
                </article>
              ))}

            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutCta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaContent}>
              <span className={styles.eyebrow}>
                آماده همکاری هستید؟
              </span>

              <h2 className={styles.ctaTitle}>
                بیایید مسیر همکاری را
                <br />
                <span>با هم آغاز کنیم</span>
              </h2>

              <p className={styles.ctaDescription}>
                برای دریافت اطلاعات بیشتر درباره محصولات و
                فعالیت‌های ریواکس، با ما در ارتباط باشید.
              </p>
            </div>

            <div className={styles.ctaAction}>
              <Link
                to="/contact"
                className={styles.ctaButton}
              >
                ارتباط با ریواکس
                <span>←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default About;