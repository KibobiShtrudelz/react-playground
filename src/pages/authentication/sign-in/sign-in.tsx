import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import styles from './sign-in.module.scss';

export function SignIn() {
  return (
    <div className={styles.signIn}>
      <div className={styles.content}>
        <h1>
          Sign In{' '}
          <span role="img" aria-label="man lifting wiehgts">
            🏋️‍♂️
          </span>
        </h1>

        <form className={styles.signInForm}>
          <InputText className={styles.input} />

          <InputText className={styles.input} />

          <Button label="Pump it" />
        </form>
      </div>
    </div>
  );
}
