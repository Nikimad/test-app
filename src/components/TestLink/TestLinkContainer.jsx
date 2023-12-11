import { useRef } from "react";
import useModal from "@/hooks/useModal";
import TestLink from "./TestLink";

const TestListContainer = ({ test }) => {
  const linkref = useRef(null);
  const modalProps = useModal(linkref);

  const handleClick = (e) => {
    e.preventDefault();
    modalProps.openModal();
  };

  return (
    <TestLink
      linkref={linkref}
      test={test}
      onClick={handleClick}
      modalProps={modalProps}
    />
  );
};

export default TestListContainer;
