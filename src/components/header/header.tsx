import { NavLink, useNavigate } from 'react-router-dom'

import { pathnames } from '@constants'

import styles from './header.module.scss'

export function Header() {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <section className={styles.logoWrapper} onClick={() => navigate(pathnames.root)}>
        <span>LoremLogos</span>
      </section>

      <section className={styles.auth}>
        <NavLink to="/sign-in">Sign In</NavLink> <span>/</span>{' '}
        <NavLink to="/sign-up">Sign Up</NavLink>
      </section>
    </header>
  )
}
