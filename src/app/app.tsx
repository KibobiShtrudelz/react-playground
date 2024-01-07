import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

import { Main, Header } from '@components'

import { useLayout } from '@hooks'
import { pathnames } from '@constants'

import styles from './app.module.scss'

export function App() {
  const layoutType = useLayout()

  const { pathname } = useLocation()

  const addPadding = !(
    pathname.includes(pathnames.authentication.signIn) ||
    pathname.includes(pathnames.authentication.signUp) ||
    pathname.includes(pathnames.authentication.forgetPassword)
  )

  return (
    <div className={clsx(styles.app, styles[layoutType], addPadding && styles.addPadding)}>
      {layoutType === 'common' && <Header />}

      <Main />
    </div>
  )
}
