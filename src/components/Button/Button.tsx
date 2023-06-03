interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  text,
  onClick,
  className,
}: ButtonProps): React.ReactElement => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
