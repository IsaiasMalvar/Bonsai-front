import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="image-logo"
        src="/images/bonsai-logo.png"
        alt="bonsai logo"
        width="200"
        height="80"
      />
    </HeaderStyled>
  );
};

export default Header;
