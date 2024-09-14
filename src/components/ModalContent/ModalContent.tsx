import { FC } from "react";
import useHandlerModal from "../../hooks/useHandlerModal ";
import BurgerMenuModal from "../Modal/BurgerMenuModal";

const ModalContent: FC = () => {
  const { modalName } = useHandlerModal();

  switch (modalName) {
    case "BurgerMenuModal":
      return <BurgerMenuModal />;
    default:
      return null;
  }
};

export default ModalContent;
