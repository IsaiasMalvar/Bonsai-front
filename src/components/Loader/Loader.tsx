import LoaderStyled from "./LoaderStyled";

const Loader = (): React.ReactElement => {
  return (
    <LoaderStyled>
      <span className="loader" aria-label="loader-animation" />
    </LoaderStyled>
  );
};

export default Loader;
