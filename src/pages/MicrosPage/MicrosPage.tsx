import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import MicrosPageStyled from "./MicrosPageStyled";
import { loadMicrosActionCreator } from "../../store/micros/microsSlice";
import MicrosList from "../../components/MicrosList/MicrosList";
import useMicros from "../../hooks/useMicros/useMicros";
import Pagination from "../../components/Pagination/Pagination";
import ContainerStyled from "../../components/shared/ContainerStyled";

const MicrosPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getMicros } = useMicros();
  const { isLogged } = useAppSelector((state) => state.userStore);

  const limit = 5;
  const [count, setCount] = useState(0);
  const [skip, setSkip] = useState(0);

  const nextPage = () => {
    setSkip(skip + limit);
    setCount(count + 1);
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    setSkip(skip - limit);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    (async () => {
      const { microstories, totalMicrostories } = await getMicros(skip, limit);
      if (microstories)
        dispatch(
          loadMicrosActionCreator({
            microstories: microstories,
            totalMicrostories: totalMicrostories,
          })
        );

      const preconnectElement = await document.createElement("link");
      preconnectElement.rel = "preload";
      preconnectElement.as = "image";
      preconnectElement.href = microstories[0].image;

      const parent = document.head;
      const firstChild = document.head.firstChild;
      parent.insertBefore(preconnectElement, firstChild);
    })();
  }, [dispatch, getMicros, isLogged, limit, skip]);

  return (
    <ContainerStyled>
      <MicrosPageStyled>
        <h2 className="list-title">Micros</h2>
        <MicrosList />
        <Pagination
          count={count}
          skip={skip}
          onClickNextPage={nextPage}
          onClickPreviousPage={previousPage}
        />
      </MicrosPageStyled>
    </ContainerStyled>
  );
};

export default MicrosPage;
