import styles from './contact.module.scss';

/* eslint-disable-next-line */
export interface ContactProps {}

export function Contact(props: ContactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Contact!</h1>
    </div>
  );
}

export default Contact;
