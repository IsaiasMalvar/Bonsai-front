import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import MicrosPageStyled from "./MicrosPageStyled";
import { loadMicrosActionCreator } from "../../store/micros/microsSlice";
import { getMicrosMockData } from "../../mocks/factories/microsFactory/microsFactory";

const MicrosPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadMicrosActionCreator(getMicrosMockData(3)));
  }, [dispatch]);

  return (
    <MicrosPageStyled>
      <h2 className="list-title">Micros</h2>
    </MicrosPageStyled>
  );
};

export default MicrosPage;
