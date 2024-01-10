import clsx from 'clsx'
import { Route, Routes, useLocation } from 'react-router-dom'

import { NavBar, Footer, ProtectedRoute } from '@components'
import { Home, About, SignUp, SignIn, Contact, Landing, Dashboard } from '@pages'

import { useLayout } from '@hooks'
import { pathnames } from '@constants'

import styles from './main.module.scss'

export function Main() {
  const location = useLocation()

  const layoutType = useLayout()

  return (
    <main className={clsx(styles.main, styles[layoutType])}>
      {layoutType === 'common' && <NavBar />}

      <div className={clsx(styles.content, styles[layoutType])}>
        <Routes location={location} key={location.pathname}>
          {/* Authentication routes */}
          <Route path={pathnames.authentication.signUp} element={<SignUp />} />
          <Route path={pathnames.authentication.signIn} element={<SignIn />} />

          {/* Public routes */}
          <Route path={pathnames.root} element={<Landing />} />
          <Route path={pathnames.public.home} element={<Home />} />
          <Route path={pathnames.public.about} element={<About />} />
          <Route path={pathnames.public.contact} element={<Contact />} />

          {/* Protected routes */}
          <Route path={pathnames.protected.dashboard} element={<ProtectedRoute isAuthenticated />}>
            <Route path={pathnames.protected.dashboard} element={<Dashboard />} />
          </Route>

          <Route path="*" element={<Landing />} />
        </Routes>
      </div>

      {layoutType === 'common' && <Footer />}
    </main>
  )
}
