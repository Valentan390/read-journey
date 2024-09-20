import { FC, useCallback } from "react";
import Icon from "../../Icon/Icon";
import { useBurgerMenu, useHandlerModal } from "../../../hooks";
import { CloseBtn_Button } from "./CloseBtn.styled";

const CloseBtn: FC<{ menu?: string; modal?: boolean }> = ({ menu, modal }) => {
  const { handlerModalClose } = useHandlerModal();
  const { handlerBurgerMenuClose } = useBurgerMenu();
  const isBurgerMenu = menu === "burgerMenu";

  const handlerClose = useCallback(() => {
    if (isBurgerMenu) {
      handlerBurgerMenuClose();
    } else {
      handlerModalClose();
    }
  }, [handlerModalClose, handlerBurgerMenuClose, isBurgerMenu]);
  return (
    <CloseBtn_Button $modal={modal} type="button" onClick={handlerClose}>
      <Icon
        iconName="icon-x"
        width={modal ? 22 : 28}
        height={modal ? 22 : 28}
        stroke="white"
      />
    </CloseBtn_Button>
  );
};

export default CloseBtn;
