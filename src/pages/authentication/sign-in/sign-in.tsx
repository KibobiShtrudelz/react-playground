import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { Button, Password, InputText } from '../../../components';

import { pathnames } from '../../../constants';

import styles from './sign-in.module.scss';

import signInPromoImage from '../../../assets/images/sign-in-promo.jpeg';

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

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
            onSubmit={handleSubmit((data) => {
              console.log('sain in deita >>>', data);
            })}
          >
            <Controller
              name="email"
              control={control}
              rules={{ required: 'E-mail is required.' }}
              render={({ field, fieldState }) => (
                <>
                  <InputText
                    label="E-mail"
                    id={field.name}
                    inputMode="email"
                    inputSize="large"
                    value={field.value}
                    error={errors.email}
                    className={clsx(fieldState.error && 'p-invalid')}
                    onChange={(e) => field.onChange(e.target.value)}
                  />

                  {/* <label
                    htmlFor={field.name}
                    className={clsx(errors.value && 'p-error')}
                  ></label>
                  <span className="p-float-label">
                    <InputText
                      id={field.name}
                      value={field.value}
                      className={clsx(fieldState.error && 'p-invalid')}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <label htmlFor={field.name}>Name - Surname</label>
                  </span> */}

                  {getFormErrorMessage(field.name)}
                </>
              )}
            />

            {/* <InputText
              id="email"
              label="E-mail"
              inputMode="email"
              inputSize="large"
            /> */}

            <Password
              id="password"
              label="Password"
              inputSize="large"
              feedback={false}
            />

            <Button
              type="submit"
              raised
              size="large"
              label="Pump it"
              iconPos="right"
              icon="pi pi-spin pi-spinner"
            />
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
