import { ButtonProps as PrimeReactButtonProps } from 'primereact/button';

export interface ButtonProps extends PrimeReactButtonProps {
  buttonSize?: 'small' | 'large';
}
