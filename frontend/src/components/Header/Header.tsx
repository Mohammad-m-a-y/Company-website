import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.css';


function Header() {
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
          <span className={styles.logoText}>ریواکس</span>
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