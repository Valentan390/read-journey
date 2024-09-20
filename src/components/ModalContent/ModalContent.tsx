import { FC } from "react";
import { useHandlerModal } from "../../hooks";
import AboutBookModal from "../Modal/AboutBookModal/AboutBookModal";

const ModalContent: FC = () => {
  const { modalName } = useHandlerModal();

  switch (modalName) {
    case "AboutBook":
      return <AboutBookModal />;
    default:
      return null;
  }
};

export default ModalContent;
