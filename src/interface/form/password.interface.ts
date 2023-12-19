import { PasswordProps as PrimeReactPasswordProps } from 'primereact/password';

export interface PasswordProps extends PrimeReactPasswordProps {
  label?: string;
  inputSize?: 'small' | 'large';
}
