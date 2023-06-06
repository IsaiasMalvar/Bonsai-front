import { useAppDispatch } from "../../store";
import { hideFeedbackActionCreator } from "../../store/ui/uiSlice";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  text: string;
  image?: string;
  isError: boolean;
}

const Modal = ({ text, image, isError }: ModalProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const handleOnClose = () => {
    dispatch(hideFeedbackActionCreator());
  };
  return (
    <ModalStyled className="modal">
      <div
        className={`modal__container modal__container${
          isError ? "--error" : ""
        }  `}
      >
        <button
          className="modal__button modal__button--close"
          onClick={handleOnClose}
        >
          X
        </button>
        <span className="modal modal__message">{text}</span>
        {image && (
          <img
            src={image}
            className="modal modal__icon"
            alt="feedback icon"
            width={50}
            height={50}
          />
        )}
      </div>
    </ModalStyled>
  );
};

export default Modal;
