import useMicros from "../../hooks/useMicros/useMicros";
import { useAppDispatch } from "../../store";
import { deleteMicroActionCreator } from "../../store/micros/microsSlice";
import { MicroStructure } from "../../store/types";
import Button from "../Button/Button";
import MicroCardStyled from "./MicroCardStyled";

interface MicroProps {
  micro: MicroStructure;
}

const MicroCard = ({
  micro: { author, dateOfCreation, genre, image, title, id },
}: MicroProps): React.ReactElement => {
  const { deleteMicro } = useMicros();
  const dispatch = useAppDispatch();
  const handleOnDelete = () => {
    dispatch(deleteMicroActionCreator({ microId: id }));
    deleteMicro(id);
  };
  return (
    <MicroCardStyled className="card">
      <img className="card__image" src={image} alt={`${title}`} />
      <h2 className="card__title">{title}</h2>
      <ul className="card__list">
        <li className="card__item">Author: {author}</li>
        <li className="card__item">Genre: {genre}</li>
        <li className=" card__item">Publishing date: {dateOfCreation}</li>
      </ul>
      <Button
        button={{
          className: "card__button--delete",
          icon: "/images/card-delete.png",
          height: "50",
          width: "50",
          alt: "delete icon",
          actionOnClick: () => handleOnDelete(),
          arialLabel: "delete-button",
        }}
      />
    </MicroCardStyled>
  );
};

export default MicroCard;
