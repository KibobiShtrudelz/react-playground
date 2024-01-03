import clsx from 'clsx'
import { z } from 'zod'
// import * as yup from 'yup';
import { useMutation } from '@tanstack/react-query'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup';
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, Password, InputText } from '../../../components'

import { signInService } from '../../../services'
import { regex, pathnames } from '../../../constants'

import styles from './sign-in.module.scss'

import signInPromoImage from '../../../assets/images/sign-in-promo.jpeg'

type SignInDto = {
  email: string
  password: string
}

const signInSchema = z
  .object({
    email: z.string().email(),
    password: z.string()
  })
  .required()
// const signInSchema = yup
//   .object({
//     email: yup.string().email().required(),
//     password: yup.string().required(),
//   })
//   .required();

export function SignIn() {
  const navigate = useNavigate()

  const { mutate, isPending } = useMutation({
    mutationKey: ['signIn'],
    mutationFn: signInService,
    onSuccess: data => {
      if (data.email) {
        navigate(pathnames.protected.dashboard)
      }
    }
  })

  const {
    control,
    handleSubmit,

    formState: { errors }
  } = useForm({
    resolver: zodResolver(signInSchema),
    // resolver: yupResolver(signInSchema),
    shouldFocusError: true,
    defaultValues: { email: '', password: '' }
  })

  const fakeSubmitEndpoint = (data: SignInDto) => mutate(data)

  const getFormErrorMessage = (name: keyof SignInDto) =>
    errors[name] ? (
      <small className="p-error">{errors[name]?.message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    )

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
            onSubmit={handleSubmit(data => {
              fakeSubmitEndpoint(data)
            })}
          >
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'E-mail is required.',
                pattern: {
                  value: regex.email,
                  message: 'Incorrect email format'
                }
              }}
              render={({ field, fieldState }) => (
                <>
                  <InputText
                    label="Email"
                    id={field.name}
                    inputMode="email"
                    inputSize="large"
                    value={field.value}
                    disabled={isPending}
                    className={clsx(fieldState.error && 'p-invalid')}
                    onChange={e => field.onChange(e.target.value)}
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
                    value={field.value}
                    disabled={isPending}
                    error={errors.password}
                    onChange={e => field.onChange(e.target.value)}
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
              disabled={isPending}
              icon={isPending ? 'pi pi-spin pi-spinner' : ''}
            />
          </form>

          <small className={styles.signUpText}>
            Don't have an account? <Link to={pathnames.authentication.signUp}>Sign Up</Link> now
          </small>
        </section>
      </div>
    </div>
  )
}
