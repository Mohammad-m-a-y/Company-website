 
import styles from './Loading.module.css';


function Loading() {

  return (
    <div className={styles.loading}>
      <span className={styles.spinner} />
    </div>
  );
}


export default Loading;
 