import clsx from 'clsx';
import { Button as PrimeReactButton } from 'primereact/button';

import { ButtonProps } from '../../interface';

// import styles from './button.module.scss';

export function Button({ className, buttonSize, ...rest }: ButtonProps) {
  return (
    <PrimeReactButton
      // className={clsx(
      //   className,
      //   buttonSize === 'small' && 'p-button-sm',
      //   buttonSize === 'large' && 'p-button-lg'
      // )}
      {...rest}
    />
  );
}
