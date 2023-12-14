import { Link } from 'react-router-dom';

import styles from './nav-bar.module.scss';

export function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navLinks}>
        <Link to="/home">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
