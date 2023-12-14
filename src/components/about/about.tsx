import { transition } from '../../transition';

import styles from './about.module.scss';

export const About = transition(() => (
  <div className={styles.about}>
    <h1>Welcome to AboutUs!</h1>
  </div>
));
