import { useAppSelector } from "../../store";
import MicroCard from "../MicroCard/MicroCard";
import MicrosListStyled from "./MicrosListStyled";

const MicrosList = (): React.ReactElement => {
  const micros = useAppSelector((state) => state.microsStore);
  const { username } = useAppSelector((state) => state.userStore);
  const { microstories: microsCard } = micros;

  return (
    <MicrosListStyled>
      {microsCard.map((micro) => (
        <li key={micro.id}>
          {(micro.isPublic || username === micro.author) && (
            <MicroCard micro={micro} user={username} />
          )}
        </li>
      ))}
    </MicrosListStyled>
  );
};

export default MicrosList;
