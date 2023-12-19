import clsx from 'clsx';
import { Password as PrimeReactPassword } from 'primereact/password';

import { PasswordProps } from '../../../interface/form/password.interface';

// import styles from './password.module.scss';

export function Password({
  label,
  className,
  inputSize,
  ...rest
}: PasswordProps) {
  return (
    <span className="p-float-label">
      <PrimeReactPassword
        toggleMask
        className={clsx(
          className,
          inputSize === 'small' && 'p-inputtext-sm',
          inputSize === 'large' && 'p-inputtext-lg'
        )}
        {...rest}
      />

      <label htmlFor="password">{label}</label>
    </span>
  );
}
