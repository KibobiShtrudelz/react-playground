import styles from './card.module.scss'

/* eslint-disable-next-line */
export interface CardProps {}

export function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      <h1>Welcome to Card!</h1>
    </div>
  )
}
