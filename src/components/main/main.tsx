import { Route, Routes, useLocation } from 'react-router-dom';

import { ProtectedRoute } from '../routing';
import { NavBar, Footer } from '../../components';
import { Home, About, SignUp, SignIn, Contact, Dashboard } from '../../pages';

import { pathnames } from '../../constants';

import styles from './main.module.scss';

export function Main() {
  const location = useLocation();

  return (
    <main className={styles.main}>
      <NavBar />

      <div className={styles.content}>
        <Routes location={location} key={location.pathname}>
          {/* Authentication routes */}
          <Route path={pathnames.authentication.signUp} element={<SignUp />} />
          <Route path={pathnames.authentication.signIn} element={<SignIn />} />

          {/* Public routes */}
          <Route path={pathnames.public.home} element={<Home />} />
          <Route path={pathnames.public.about} element={<About />} />
          <Route path={pathnames.public.contact} element={<Contact />} />

          {/* Protected routes */}
          <Route
            path={pathnames.protected.dashboard}
            element={<ProtectedRoute isAuthenticated />}
          >
            <Route
              path={pathnames.protected.dashboard}
              element={<Dashboard />}
            />
          </Route>

          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>

      <Footer />
    </main>
  );
}
