import styles from './ErrorMessage.module.css';


interface ErrorMessageProps {
  message: string;

}


function ErrorMessage({
  message,
}: ErrorMessageProps) {

  return (
    <div className={styles.error}>
      <div className={styles.icon}>
        !
      </div>

      <p className={styles.message}>
        {message}
      </p>

    </div>
  );
}


export default ErrorMessage;
 