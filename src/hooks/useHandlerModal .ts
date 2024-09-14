import {
  selectModalName,
  selectModalOpen,
} from "../redux/modal/modalSelectors";
import { setModalName, setModalOpen } from "../redux/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "./useReduxHooks";

const useHandlerModal = () => {
  const isModalOpen = useAppSelector(selectModalOpen);
  const modalName = useAppSelector(selectModalName);
  const dispatch = useAppDispatch();

  const handlerModalOpen: (nameModal: string) => void = (nameModal) => {
    dispatch(setModalOpen(!isModalOpen));
    dispatch(setModalName(nameModal));
  };

  const handlerModalClose = () => {
    dispatch(setModalOpen(!isModalOpen));
    dispatch(setModalName(""));
  };

  return { modalName, isModalOpen, handlerModalOpen, handlerModalClose };
};

export default useHandlerModal;
