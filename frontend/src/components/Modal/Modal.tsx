import styles from './Modal.module.css';
import type { ModalProps } from '../../types/ModalProps';


function Modal({
  isOpen,
  title,
  children,
  onClose,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="بستن"
        >
          ×
        </button>

        <div className={styles.icon}>
          ✓
        </div>

        <h2 className={styles.title}>
          {title}
        </h2>

        <div className={styles.content}>
          {children}
        </div>

        <button
          type="button"
          className={styles.confirmButton}
          onClick={onClose}
        >
          متوجه شدم
        </button>
      </div>
    </div>
  );
}

export default Modal;