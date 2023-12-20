import { Link } from 'react-router-dom';

import { Button, Password, InputText } from '../../../components';

import { pathnames } from '../../../constants';

import styles from './sign-in.module.scss';

import signInPromoImage from '../../../assets/images/sign-in-promo.jpeg';

export function SignIn() {
  return (
    <div className={styles.signIn}>
      <div className={styles.content}>
        <section className={styles.promotionsSection}>
          <img src={signInPromoImage} alt="sign in promo" />
        </section>

        <section className={styles.formSection}>
          <h1>
            Sign In{' '}
            <span role="img" aria-label="man lifting wiehgts">
              🏋️‍♂️
            </span>
          </h1>

          <form
            className={styles.signInForm}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
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

          <small className={styles.signUpText}>
            Don't have an account?{' '}
            <Link to={pathnames.authentication.signUp}>Sign Up</Link> now
          </small>
        </section>
      </div>
    </div>
  );
}
