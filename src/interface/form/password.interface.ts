import { FieldError } from 'react-hook-form'
import { PasswordProps as PrimeReactPasswordProps } from 'primereact/password'

export interface PasswordProps extends PrimeReactPasswordProps {
  label?: string
  error?: FieldError
  inputSize?: 'small' | 'large'
}
