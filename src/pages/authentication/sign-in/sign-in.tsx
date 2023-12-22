import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useForm, Controller, FieldErrors } from 'react-hook-form';

import { Button, Password, InputText } from '../../../components';

import { pathnames } from '../../../constants';

import styles from './sign-in.module.scss';

import signInPromoImage from '../../../assets/images/sign-in-promo.jpeg';

type SignInFormData = {
  email: string;
  password: string;
};

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    shouldFocusError: true,
    defaultValues: { email: '', password: '' },
  });

  const getFormErrorMessage = (name: keyof SignInFormData) =>
    errors[name] ? (
      <small className="p-error">{errors[name]?.message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );

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
              rules={{ required: 'E-mail is required.', deps: 'email' }}
              render={({ field, fieldState }) => (
                <>
                  <InputText
                    label="E-mail"
                    id={field.name}
                    inputMode="email"
                    inputSize="large"
                    value={field.value}
                    className={clsx(fieldState.error && 'p-invalid')}
                    onChange={(e) => field.onChange(e.target.value)}
                  />

                  {getFormErrorMessage(field.name)}
                </>
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{ required: 'Password is required.', deps: 'password' }}
              render={({ field, fieldState }) => (
                <>
                  <Password
                    id={field.name}
                    label="Password"
                    inputSize="large"
                    feedback={false}
                    value={field.value}
                    error={errors.password}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {getFormErrorMessage(field.name)}
                </>
              )}
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
