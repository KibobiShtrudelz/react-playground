import * as React from 'react'

import clsx from 'clsx'
import { useLocation, useNavigate } from 'react-router-dom'

import { Main, Header } from '../components'

import { useLayout } from '../hooks'
import { pathnames } from '../constants'

import styles from './app.module.scss'

const { useEffect } = React

export function App() {
  const location = useLocation()

  const navigate = useNavigate()

  const layoutType = useLayout()

  useEffect(() => {
    if (location.pathname === pathnames.root) {
      navigate(pathnames.public.home)
    }
  }, [location.pathname, navigate])

  return (
    <div className={clsx(styles.app, styles[layoutType])}>
      {layoutType === 'common' && <Header />}

      <Main />
    </div>
  )
}
