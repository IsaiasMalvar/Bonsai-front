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
      <img className="card__image" src={image} alt={`${title}`} />
      <h2 className="card__title">{title}</h2>
      <ul className="card__list">
        <li className="card__item">Author: {author}</li>
        <li className="card__item">Genre: {genre}</li>
        <li className=" card__item">Publishing date: {dateOfCreation}</li>
      </ul>
    </MicroCardStyled>
  );
};

export default MicroCard;
