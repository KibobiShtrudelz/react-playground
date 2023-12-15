import * as React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { Main, Header } from '../components';

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

      <Main />
    </div>
  );
}
