import * as React from 'react';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Home, About, NavBar, Header, Footer, Contact } from '../components';

import styles from './app.module.scss';

const { useEffect } = React;

export function App() {
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location.pathname, navigate]);

  return (
    <div className={styles.app}>
      <Header />

      <main>
        <NavBar />

        <div className={styles.content}>
          <Routes location={location} key={location.pathname}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </main>
    </div>
  );
}
