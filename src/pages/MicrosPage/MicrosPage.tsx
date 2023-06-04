import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import MicrosPageStyled from "./MicrosPageStyled";
import { loadMicrosActionCreator } from "../../store/micros/microsSlice";
import MicrosList from "../../components/MicrosList/MicrosList";
import useMicros from "../../hooks/useMicros/useMicros";
import Loader from "../../components/Loader/Loader";

const MicrosPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getMicros } = useMicros();
  const { isLoading } = useAppSelector((state) => state.uiStore);

  useEffect(() => {
    (async () => {
      const micros = await getMicros();
      if (micros) dispatch(loadMicrosActionCreator(micros));
    })();
  }, [dispatch, getMicros]);

  return (
    <>
      {isLoading && <Loader />}
      <MicrosPageStyled>
        <h2 className="list-title">Micros</h2>
        <MicrosList></MicrosList>
      </MicrosPageStyled>
    </>
  );
};

export default MicrosPage;
