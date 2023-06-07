import { NavLink } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <h1 className="title">404</h1>
      <img
        className="not-found__image"
        src="/images/404.jpg"
        width={271}
        height={196}
        alt="Little girl in shock"
      />
      <span className="detail">There is nothing around here</span>
      <NavLink to="/home" className="link__home" aria-label="home">
        <img
          className="logout__icon"
          src="/images/home-icon.png"
          alt="home icon"
          width="50"
          height="50"
        ></img>
      </NavLink>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
