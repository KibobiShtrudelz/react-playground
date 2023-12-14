import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home, About, NavBar, Header, Footer, Contact } from '../components';

import styles from './app.module.scss';

export function App() {
  const location = useLocation();

  return (
    <div className={styles.app}>
      <Header />

      <NavBar />

      <div className={styles.container}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/home" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
