import { MicroStructure } from "../../store/types";
import DetailPageStyled from "./DetailPageStyled";

interface DetailPageProps {
  micro: MicroStructure;
}

const DetailPage = ({
  micro: { author, dateOfCreation, genre, image, title },
}: DetailPageProps): React.ReactElement => {
  return (
    <>
      <DetailPageStyled className="micro">
        <img
          className="micro__image"
          src={image}
          alt="detail"
          width={273}
          height={191}
        ></img>
        <div className="micro__info">
          <h2 className="micro__title">{title}</h2>
          <h3 className="micro__author">{author}</h3>
          <h3 className="micro__genre">{genre}</h3>
          <h3 className="micro__date">{dateOfCreation}</h3>
          <p className="micro__story">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            architecto ducimus ea! Omnis voluptatum quae id odio doloribus
            consectetur, voluptas rerum expedita iure magni optio suscipit,
            minus veniam, aspernatur soluta.
          </p>
        </div>
      </DetailPageStyled>
    </>
  );
};

export default DetailPage;
