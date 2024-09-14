import {
  FC,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import useHandlerModal from "../../hooks/useHandlerModal ";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { ModalContainerBackdrop } from "./ModalContainer.styled";
import { containerVariants } from "../../helpers";

const ModalContainer: FC<{ children: ReactNode }> = ({ children }) => {
  const { isModalOpen, handlerModalClose } = useHandlerModal();
  const element = useMemo(() => document.createElement("div"), []);
  const modalRootElementRef = useRef<HTMLElement>(
    document.getElementById("ModalRoot")
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        handlerModalClose();
      }
    },
    [isModalOpen, handlerModalClose]
  );

  const handleBackdropClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (event.target === event.currentTarget) {
        handlerModalClose();
      }
    },
    [handlerModalClose]
  );

  useEffect(() => {
    const currentModalRootElement = modalRootElementRef.current;
    if (!currentModalRootElement) return;

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    currentModalRootElement.appendChild(element);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (!currentModalRootElement) return;
      currentModalRootElement.removeChild(element);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [element, handleKeyDown, isModalOpen]);

  return createPortal(
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalContainerBackdrop onClick={handleBackdropClick}>
            {children}
          </ModalContainerBackdrop>
        </motion.div>
      )}
    </AnimatePresence>,
    element
  );
};

export default ModalContainer;
