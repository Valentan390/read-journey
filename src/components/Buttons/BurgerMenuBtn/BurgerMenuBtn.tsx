import { FC } from "react";
import Icon from "../../Icon/Icon";
import { BurgerMenuButton } from "./BurgerMenuBtn.styled";
import { useBurgerMenu } from "../../../hooks";

const BurgerMenuBtn: FC = () => {
  const { handlerBurgerMenuOpen } = useBurgerMenu();
  return (
    <BurgerMenuButton type="button" onClick={handlerBurgerMenuOpen}>
      <Icon iconName="icon-menu-04" width={25} height={25} stroke="white" />
    </BurgerMenuButton>
  );
};

export default BurgerMenuBtn;
