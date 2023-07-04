import { useAppSelector } from "../../store";
import MicroCard from "../MicroCard/MicroCard";
import MicrosListStyled from "./MicrosListStyled";

const MicrosList = (): React.ReactElement => {
  const micros = useAppSelector((state) => state.microsStore);
  const { username } = useAppSelector((state) => state.userStore);
  const { microstories: microsCards } = micros;

  return (
    <MicrosListStyled>
      {microsCards.length === 0 && (
        <p className="empty">
          There are currently no available micros for this genre.
        </p>
      )}
      {micros &&
        microsCards.map((micro, index) => (
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
