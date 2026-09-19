import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.css';
import { useCompany } from '../../contexts/Company';


function Header() {
  const { company, loading } = useCompany();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  

  return (
    <header
      className={`${styles.header} ${
        isHomePage ? styles.headerHome : styles.headerInner
      }`}
    >
      <div className="container">
        <Link to="/" className={styles.logo}>
          {!loading && company?.logo ? (
            <img
              src={company.logo}
              alt={company.name}
              className={styles.logoImage}
            />
          ) : (
            <span className={styles.logoText}>
              {company?.name ?? 'ریواکس'}
            </span>
          )}

          <span className={styles.logoAccent} />
        </Link>

        <nav className={styles.navigation}>
          <Link
            to="/"
            className={`${styles.navLink} ${
              isHomePage ? styles.active : ''
            }`}
          >
            خانه
          </Link>

          <Link
            to="/about"
            className={`${styles.navLink} ${
              location.pathname === '/about' ? styles.active : ''
            }`}
          >
            درباره ما
          </Link>

          <Link
            to="/contact"
            className={`${styles.navLink} ${
              location.pathname === '/contact' ? styles.active : ''
            }`}
          >
            تماس با ما
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;