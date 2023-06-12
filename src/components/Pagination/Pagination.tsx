import { useAppSelector } from "../../store";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  onClickPreviousPage: () => void;
  onClickNextPage: () => void;
  skip: number;
  count: number;
}

const Pagination = ({
  onClickNextPage,
  onClickPreviousPage,
  skip,
  count,
}: PaginationProps): React.ReactElement => {
  const { totalMicrostories } = useAppSelector((state) => state.microsStore);
  const result = totalMicrostories - skip;
  const nextDisabled = result <= 5;
  return (
    <PaginationStyled>
      <button
        className="button__previous"
        onClick={onClickPreviousPage}
        disabled={count === 0}
      >
        Previous
      </button>
      <button
        className="button__next"
        onClick={onClickNextPage}
        disabled={nextDisabled}
      >
        Next
      </button>
    </PaginationStyled>
  );
};

export default Pagination;
