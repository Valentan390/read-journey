import { FC } from "react";
import useHandlerModal from "../../../hooks/useHandlerModal ";
import Icon from "../../Icon/Icon";
import { BurgerMenuButton } from "./BurgerMenuBtn.styled";

const BurgerMenuBtn: FC = () => {
  const { handlerModalOpen } = useHandlerModal();
  return (
    <BurgerMenuButton
      type="button"
      onClick={() => handlerModalOpen("BurgerMenuModal")}
    >
      <Icon iconName="icon-menu-04" width={25} height={25} stroke="white" />
    </BurgerMenuButton>
  );
};

export default BurgerMenuBtn;
