import { Route, Routes, useLocation } from 'react-router-dom';

import { NavBar, Footer } from '../../components';
import { Home, About, Contact } from '../../pages';

import styles from './main.module.scss';

export function Main() {
  const location = useLocation();

  return (
    <main className={styles.main}>
      <NavBar />

      <div className={styles.content}>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </main>
  );
}
