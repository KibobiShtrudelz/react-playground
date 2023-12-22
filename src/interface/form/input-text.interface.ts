import { InputTextProps as PrimeReactInputTextProps } from 'primereact/inputtext';

export interface InputTextProps extends PrimeReactInputTextProps {
  label?: string;
  error?: string;
  inputSize?: 'small' | 'large';
}
