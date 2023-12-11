import Link from "next/link";
import Modal from "../Modal";
import s from "./TestLink.module.scss";

const TestLink = ({ linkref, test, onClick, modalProps }) => (
  <>
    <li className={s.item}>
      <h3 className={s.item__subtitle}>Test</h3>
      <h2 className={s.item__title}>{test.title}</h2>
      <hr className={s.item__separator} />
      <div className={s.item__controls}>
        <Link
          className={s.item__link}
          ref={linkref}
          onClick={onClick}
          href={`test/${test.id}`}
        >
          Start test
        </Link>
        <Link className={s.item__link} href={"/"}>
          Edit test
        </Link>
      </div>
    </li>
    {modalProps.isModalOpen ? (
      <Modal onClose={modalProps.closeModal}>
        <h2>Start taking the test?</h2>
        <div className={s.item__controls}>
          <Link href={`test/${test.id}`}>Confirm</Link>
          <button onClick={modalProps.closeModal}>Cancel</button>
        </div>
      </Modal>
    ) : null}
  </>
);

export default TestLink;
