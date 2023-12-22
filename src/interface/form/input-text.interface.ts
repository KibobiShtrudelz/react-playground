import { InputTextProps as PrimeReactInputTextProps } from 'primereact/inputtext';

export interface InputTextProps extends PrimeReactInputTextProps {
  label?: string;
  inputSize?: 'small' | 'large';
}
