import {
  FC,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useHandlerModal } from "../../hooks";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { ModalContainerBackdrop } from "./ModalContainer.styled";
import { containerVariants } from "../../helpers";

const ModalContainer: FC<{ children: ReactNode }> = ({ children }) => {
  const { isModal, handlerModalClose } = useHandlerModal();
  const modalRootElementRef = useRef<HTMLElement | null>(
    document.getElementById("ModalRoot")
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModal) {
        handlerModalClose();
      }
    },
    [isModal, handlerModalClose]
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
    if (isModal) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModal, handleKeyDown]);

  if (!modalRootElementRef.current) return null;

  return createPortal(
    <AnimatePresence>
      {isModal && (
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
    modalRootElementRef.current
  );
};

export default ModalContainer;
