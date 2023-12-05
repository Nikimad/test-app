import s from "./Modal.module.scss";

const Modal = ({ overlay, modal, onClose, onDismiss, children }) => (
  <div className={s.modal__overlay} ref={overlay} onClick={onDismiss}>
    <div
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
      ref={modal}
      className={s.modal__content}
    >
      <button className={s.modal__button} onClick={onClose}>
        Close modal
      </button>
      {children}
    </div>
  </div>
);

export default Modal;
