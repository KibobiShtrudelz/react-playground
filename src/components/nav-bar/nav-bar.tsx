import { Link } from 'react-router-dom';

import styles from './nav-bar.module.scss';

export function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>LOGO</div>

      <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
