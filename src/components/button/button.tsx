import { Button as PrimeReactButton } from 'primereact/button'

import { ButtonProps } from 'src/interface'

// import styles from './button.module.scss';

export function Button({ className, buttonSize, ...rest }: ButtonProps) {
  return <PrimeReactButton {...rest} />
}
