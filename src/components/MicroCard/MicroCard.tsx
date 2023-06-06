import { MicroStructure } from "../../store/types";
import MicroCardStyled from "./MicroCardStyled";

interface MicroProps {
  micro: MicroStructure;
}

const MicroCard = ({
  micro: { author, dateOfCreation, genre, image, title },
}: MicroProps): React.ReactElement => {
  return (
    <MicroCardStyled className="card">
      <img className=" card card__image" src={image} alt={`${title}`} />
      <h2 className=" card card__title">{title}</h2>
      <ul className=" card card__list">
        <li className="card card__list--item">Author: {author}</li>
        <li className="card card__list--item">Genre: {genre}</li>
        <li className=" card card__list--item">
          Publishing date: {dateOfCreation}
        </li>
      </ul>
    </MicroCardStyled>
  );
};

export default MicroCard;
