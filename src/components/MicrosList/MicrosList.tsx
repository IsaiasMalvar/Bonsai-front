import { useAppSelector } from "../../store";
import MicroCard from "../MicroCard/MicroCard";
import MicrosListStyled from "./MicrosListStyled";

const MicrosList = (): React.ReactElement => {
  const micros = useAppSelector((state) => state.microsStore);
  const { microstories: microsCard } = micros;

  return (
    <MicrosListStyled>
      {microsCard.map((micro) => (
        <li key={micro.id}>
          <MicroCard micro={micro} />
        </li>
      ))}
    </MicrosListStyled>
  );
};

export default MicrosList;
