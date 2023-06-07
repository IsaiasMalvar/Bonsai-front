import { ButtonStructure } from "../../store/types";

interface ButtonProps {
  button: ButtonStructure;
}

const Button = ({ button }: ButtonProps): React.ReactElement => {
  return (
    <>
      <button
        type="button"
        className={button.className}
        onClick={button.actionOnClick}
        aria-label={button.arialLabel}
      >
        {button.text || (
          <img
            src={button.icon}
            alt={button.alt}
            width={button.width}
            height={button.height}
          ></img>
        )}
      </button>
    </>
  );
};

export default Button;
