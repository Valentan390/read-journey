import { FC } from "react";
import { useHandlerModal } from "../../hooks";
import AboutBookModal from "../Modal/AboutBookModal/AboutBookModal";
import BookLibraryModal from "../Modal/BookLibraryModal/BookLibraryModal";

const ModalContent: FC = () => {
  const { modalName } = useHandlerModal();

  switch (modalName) {
    case "AboutBook":
      return <AboutBookModal />;
    case "BookLibrary":
      return <BookLibraryModal />;
    case "AboutUserBook":
      return <AboutBookModal aboutUserBook />;
    default:
      return null;
  }
};

export default ModalContent;
