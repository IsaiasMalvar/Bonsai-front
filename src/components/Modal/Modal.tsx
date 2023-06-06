import { useAppDispatch } from "../../store";
import { hideFeedbackActionCreator } from "../../store/ui/uiSlice";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  text: string;
  image: string;
  isError: boolean;
}

const Modal = ({ text, image, isError }: ModalProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const handleOnClose = () => {
    dispatch(hideFeedbackActionCreator());
  };
  return (
    <ModalStyled>
      <div
        data-testid="modal-container"
        className={`modal-container${isError ? "--error" : ""}  `}
      >
        <button
          className="modal-container__button--close"
          onClick={handleOnClose}
        >
          X
        </button>
        <span className="modal-container__message">{text}</span>
        <img
          src={image}
          className="modal-container-icon"
          alt="modal icon"
          width={50}
          height={50}
        />
      </div>
    </ModalStyled>
  );
};

export default Modal;
