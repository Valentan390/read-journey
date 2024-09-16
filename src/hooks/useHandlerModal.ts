import { useCallback } from "react";
import {
  selectModalName,
  selectModalOpen,
} from "../redux/modal/modalSelectors";
import { setModalName, setModalOpen } from "../redux/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "./useReduxHooks";

export const useHandlerModal = () => {
  const isModal = useAppSelector(selectModalOpen);
  const modalName = useAppSelector(selectModalName);
  const dispatch = useAppDispatch();

  const handlerModalOpen: (nameModal: string) => void = useCallback(
    (nameModal) => {
      dispatch(setModalOpen(!isModal));
      dispatch(setModalName(nameModal));
    },
    [dispatch, isModal]
  );

  const handlerModalClose = useCallback(() => {
    dispatch(setModalOpen(!isModal));
    dispatch(setModalName(""));
  }, [dispatch, isModal]);

  return { modalName, isModal, handlerModalOpen, handlerModalClose };
};
