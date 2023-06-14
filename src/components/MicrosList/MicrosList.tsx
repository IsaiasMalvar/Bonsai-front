import { useAppSelector } from "../../store";
import MicroCard from "../MicroCard/MicroCard";
import MicrosListStyled from "./MicrosListStyled";

const MicrosList = (): React.ReactElement => {
  const micros = useAppSelector((state) => state.microsStore);
  const { username } = useAppSelector((state) => state.userStore);
  const { microstories: microsCard } = micros;

  return (
    <MicrosListStyled>
      {micros &&
        microsCard.map((micro, index) => (
          <li key={micro.id}>
            {(micro.isPublic || username === micro.author) && (
              <MicroCard
                micro={micro}
                user={username}
                isLazy={index < 1 ? "eager" : "lazy"}
              />
            )}
          </li>
        ))}
    </MicrosListStyled>
  );
};

export default MicrosList;
