import { useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

import useFocusTrap from "@/hooks/useFocusTrap";

const ModalContainer = ({ onClose, children }) => {
  const overlay = useRef(null);
  const modal = useRef(null);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current) onClose();
    },
    [onClose, overlay]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") return onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useFocusTrap(modal);

  return createPortal(
    <Modal
      overlay={overlay}
      modal={modal}
      onClose={onClose}
      onDismiss={onClick}
      children={children}
    />,
    document.getElementById("modal-root")
  );
};

export default ModalContainer;
