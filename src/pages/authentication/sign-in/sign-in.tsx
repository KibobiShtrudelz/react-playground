import * as React from 'react';

import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { Button, Password, InputText } from '../../../components';

import { regex, pathnames } from '../../../constants';

import styles from './sign-in.module.scss';

import signInPromoImage from '../../../assets/images/sign-in-promo.jpeg';

type SignInFormData = {
  email: string;
  password: string;
};

const { useState } = React;

export function SignIn() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm<SignInFormData>({
    shouldFocusError: true,
    defaultValues: { email: '', password: '' },
  });

  const fakeSubmitEndpoint = (data: SignInFormData) => {
    setLoading(true);

    setTimeout(() => {
      Promise.resolve(data);
      setLoading(false);
      navigate(pathnames.public.home);
    }, 2000);
  };

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
              fakeSubmitEndpoint(data);
            })}
          >
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'E-mail is required.',
                pattern: {
                  value: regex.email,
                  message: 'Incorrect email format',
                },
              }}
              render={({ field, fieldState }) => (
                <>
                  <InputText
                    label="Email"
                    id={field.name}
                    inputMode="email"
                    inputSize="large"
                    disabled={loading}
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
              rules={{ required: 'Password is required.' }}
              render={({ field, fieldState }) => (
                <>
                  <Password
                    id={field.name}
                    label="Password"
                    inputSize="large"
                    feedback={false}
                    disabled={loading}
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
              disabled={loading}
              icon={loading ? 'pi pi-spin pi-spinner' : ''}
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
