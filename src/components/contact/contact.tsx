import { transition } from '../../transition';

import styles from './contact.module.scss';

export const Contact = transition(() => (
  <div className={styles.contact}>
    <h1>Welcome to Contact!</h1>
  </div>
));
