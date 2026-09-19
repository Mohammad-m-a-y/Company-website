import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './HomeAbout.module.css';

import { getAbout } from '../../../services/aboutService';
import type { About } from '../../../types/About/About';

import Loading from '../../../components/Loading/Loading';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

import SectionTitle from '../../../components/SectionTitle/SectionTitle';


function HomeAbout() {
  const [aboutData, setAboutData] = useState<About | null>(null);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
      async function fetchAbout() {
        try {
          const data = await getAbout();
  
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
    <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className={styles.sectionEyebrow}>
                درباره ریواکس
              </span>

              <SectionTitle dark={true} title={aboutData?.intro_title || ''} />

              <p>
                {aboutData?.short_intro}
              </p>


              <Link
                to="/about"
                className={styles.aboutButton}
              >
                بیشتر    
              </Link>
            </div>

            {aboutData?.image && (
            <div className={styles.aboutImageWrapper}>
              <img
                src={aboutData?.image}
                alt= { aboutData?.intro_title || "تولید روغن و گریس صنعتی" } 
                className={styles.aboutImage}
              />

              <div className={styles.aboutAccent} />
            </div>
            )}

          </div>
        </div>
      </section>
  );
}

export default HomeAbout;