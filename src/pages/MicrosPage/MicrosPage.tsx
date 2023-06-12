import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import MicrosPageStyled from "./MicrosPageStyled";
import { loadMicrosActionCreator } from "../../store/micros/microsSlice";
import MicrosList from "../../components/MicrosList/MicrosList";
import useMicros from "../../hooks/useMicros/useMicros";
import Pagination from "../../components/Pagination/Pagination";

const MicrosPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getMicros } = useMicros();

  useEffect(() => {
    (async () => {
      const micros = await getMicros();
      if (micros) dispatch(loadMicrosActionCreator(micros));
    })();
  }, [dispatch, getMicros]);

  return (
    <MicrosPageStyled>
      <h2 className="list-title">Micros</h2>
      <MicrosList />
      <Pagination
        onClickNextPage={() => ({})}
        onClickPreviousPage={() => ({})}
      />
    </MicrosPageStyled>
  );
};

export default MicrosPage;
