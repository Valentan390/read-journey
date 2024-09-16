import { FC, MouseEventHandler, useCallback, useEffect } from "react";
import CloseBtn from "../Buttons/CloseBtn/CloseBtn";
import UserNav from "../UserNav/UserNav";
import LogOutBtn from "../Buttons/LogOutBtn/LogOutBtn";
import { BurgerMenu_Backdrop, BurgerMenu_Wrapper } from "./BurgerMenu.styled";
import { useBurgerMenu } from "../../hooks";

const BurgerMenu: FC = () => {
  const { isBurgerMenu, handlerBurgerMenuClose } = useBurgerMenu();

  const handlerBackdropClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (event.target === event.currentTarget) {
        handlerBurgerMenuClose();
      }
    },
    [handlerBurgerMenuClose]
  );

  useEffect(() => {
    if (isBurgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isBurgerMenu]);

  return (
    <>
      <BurgerMenu_Backdrop
        $isOpen={isBurgerMenu}
        onClick={handlerBackdropClick}
      />

      <BurgerMenu_Wrapper $isOpen={isBurgerMenu}>
        <CloseBtn menu="burgerMenu" />
        <UserNav />
        <LogOutBtn />
      </BurgerMenu_Wrapper>
    </>
  );
};

export default BurgerMenu;
