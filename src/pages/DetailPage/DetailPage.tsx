import { useParams } from "react-router-dom";
import DetailPageStyled from "./DetailPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import useMicros from "../../hooks/useMicros/useMicros";
import { loadMicroActionCreator } from "../../store/micros/microsSlice";
import { MicroStructure } from "../../store/types";
import { useEffect } from "react";

const DetailPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { microId } = useParams();
  const { currentMicro } = useAppSelector((state) => state.microsStore);

  const { getMicro } = useMicros();

  const { author, dateOfCreation, genre, title, story, image } = currentMicro;

  useEffect(() => {
    (async () => {
      const micro = await getMicro(microId as string);
      dispatch(loadMicroActionCreator(micro as MicroStructure));
    })();
  }, [dispatch, getMicro, microId]);

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
          <p className="micro__story">{story}</p>
        </div>
      </DetailPageStyled>
    </>
  );
};

export default DetailPage;
