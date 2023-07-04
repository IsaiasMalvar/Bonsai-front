import FilterStyled from "./FilterStyled";

interface FilterProps {
  setFilterValue: (filterValue: string) => void;
  setSkip: (skipValue: number) => void;
  setCount: (countValue: number) => void;
}

const Filter = ({
  setFilterValue,
  setCount,
  setSkip,
}: FilterProps): React.ReactElement => {
  const onChangeInputs = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value);
    setCount(0), setSkip(0);
  };

  return (
    <FilterStyled
      name="genre"
      id="genre"
      onChange={onChangeInputs}
      aria-label="filter"
    >
      <option value="">Genre</option>
      <option value="Horror">Horror</option>
      <option value="Comedy">Comedy</option>
      <option value="Drama">Drama</option>
      <option value="Fantasy">Fantasy</option>
    </FilterStyled>
  );
};
export default Filter;
