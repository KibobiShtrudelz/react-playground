import styles from './not-found.module.scss'

export function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <h1>Alfredo told me you wanna Page Not Found or what?!</h1>

        <a href="/home">
          <button type="button">Teleport Home</button>
        </a>
      </div>
    </div>
  )
}
