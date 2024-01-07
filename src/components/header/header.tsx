import { NavLink } from 'react-router-dom'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.logoWrapper}>
        <span>Health</span> <span>Factory</span>
      </section>

      <section className={styles.auth}>
        <NavLink to="/sign-in">Sign In</NavLink>
      </section>
    </header>
  )
}
