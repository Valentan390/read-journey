import { FC } from "react";
import { useHandlerModal } from "../../hooks";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const ModalContent: FC = () => {
  const { modalName } = useHandlerModal();

  switch (modalName) {
    case "BurgerMenuModal":
      return <BurgerMenu />;
    default:
      return null;
  }
};

export default ModalContent;
