import { useAppSelector } from "../../store";
import MicroCard from "../MicroCard/MicroCard";
import MicrosListStyled from "./MicrosListStyled";

const MicrosList = (): React.ReactElement => {
  const microsItems = useAppSelector((state) => state.microsStore.micros);

  return (
    <MicrosListStyled>
      {microsItems.map((micro) => (
        <li key={micro.id}>
          <MicroCard micro={micro} />
        </li>
      ))}
    </MicrosListStyled>
  );
};

export default MicrosList;
