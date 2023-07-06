import { Link } from "react-router-dom";
import useMicros from "../../hooks/useMicros/useMicros";
import { useAppDispatch } from "../../store";
import { deleteMicroActionCreator } from "../../store/micros/microsSlice";
import { MicroStructure } from "../../store/types";
import Button from "../Button/Button";
import MicroCardStyled from "./MicroCardStyled";

interface MicroProps {
  micro: MicroStructure;
  user: string;
  isLazy: "eager" | "lazy";
}

const MicroCard = ({
  micro: { author, dateOfCreation, genre, image, title, id },
  user,
  isLazy,
}: MicroProps): React.ReactElement => {
  const { deleteMicro } = useMicros();
  const dispatch = useAppDispatch();
  const handleOnDelete = async () => {
    dispatch(deleteMicroActionCreator({ microId: id }));
    await deleteMicro(id);
  };

  return (
    <MicroCardStyled
      className={`card__container${user !== author ? "--stranger" : ""}`}
    >
      <Link to={`/micros/id/${id}`}>
        <img
          className="card__image"
          src={image}
          alt={`${title}`}
          width="277"
          height="208"
          loading={isLazy}
        />

        <h2 className="card__title">{title}</h2>
        <ul className="card__list">
          <li className="card__item">
            <h3>Author:</h3>
            <span>{author}</span>
          </li>
          <li className="card__item">
            <h3>Genre: </h3>
            <span aria-label="genre">{genre}</span>
          </li>
          <li className=" card__item">
            <h3>Publishing date:</h3>
            <span>{dateOfCreation}</span>
          </li>
        </ul>
      </Link>
      {author === user && (
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
      )}
    </MicroCardStyled>
  );
};

export default MicroCard;
