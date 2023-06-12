import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  onClickPreviousPage: () => void;
  onClickNextPage: () => void;
}

const Pagination = ({
  onClickNextPage,
  onClickPreviousPage,
}: PaginationProps): React.ReactElement => {
  return (
    <PaginationStyled>
      <button
        className="button__previous"
        onClick={onClickPreviousPage}
        disabled
      >
        Previous
      </button>
      <button className="button__next" onClick={onClickNextPage}>
        Next
      </button>
    </PaginationStyled>
  );
};

export default Pagination;
