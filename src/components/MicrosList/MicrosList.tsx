import { useAppSelector } from "../../store";
import MicrosListStyled from "./MicrosListStyled";

const MicrosList = (): JSX.Element => {
  const microsItems = useAppSelector((state) => state.microsStore.micros);

  return (
    <MicrosListStyled>
      {microsItems.map((micro) => (
        <li key={micro.id}>
          <h2>{micro.title}</h2>
        </li>
      ))}
    </MicrosListStyled>
  );
};

export default MicrosList;
