import clsx from 'clsx';
import { InputText as PrimeReactInputText } from 'primereact/inputtext';

import { InputTextProps } from '../../../interface';

// import styles from './input-text.module.scss';

export function InputText({
  label,
  error,
  inputSize,
  className,
  ...rest
}: InputTextProps) {
  return label ? (
    <>
      <label htmlFor={rest.name} className={clsx(error && 'p-invalid')} />

      <span className="p-float-label">
        <PrimeReactInputText
          className={clsx(
            className,
            inputSize === 'small' && 'p-inputtext-sm',
            inputSize === 'large' && 'p-inputtext-lg'
          )}
          {...rest}
        />

        <label htmlFor={rest.name}>{label}</label>
      </span>
    </>
  ) : (
    <PrimeReactInputText
      className={clsx(
        className,
        inputSize === 'small' && 'p-inputtext-sm',
        inputSize === 'large' && 'p-inputtext-lg'
      )}
      {...rest}
    />
  );
}
