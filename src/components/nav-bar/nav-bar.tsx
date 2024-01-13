import { NavLink } from 'react-router-dom'

import styles from './nav-bar.module.scss'

export function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navLinks}>
        <NavLink to="/home">Home</NavLink>

        <NavLink to="/dashboard">Dashboard</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}
