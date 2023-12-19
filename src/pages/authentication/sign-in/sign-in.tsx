import { Button, Password, InputText } from '../../../components';

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
          <InputText
            id="email"
            label="E-mail"
            inputMode="email"
            inputSize="large"
          />

          <Password
            id="password"
            label="Password"
            inputSize="large"
            feedback={false}
          />

          <Button label="Pump it" size="large" />
        </form>
      </div>
    </div>
  );
}
