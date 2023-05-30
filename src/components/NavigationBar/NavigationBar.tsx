import { NavLink } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";
const NavigationBar = (): React.ReactElement => {
  return (
    <NavigationBarStyled>
      <ul className="main-navigation">
        <li className="main-navigation__site">
          <NavLink to="/" className="site__logout">
            <img
              className="logout__icon"
              src="/images/checkout-icon.svg"
              alt="logout icon"
              width="50"
              height="50"
            ></img>
          </NavLink>
        </li>
        <li className="main-navigation__site">
          <NavLink to="/" className="site__add">
            <img
              className="add__icon"
              src="/images/add-icon.png"
              alt="add icon"
              width="50"
              height="50"
            ></img>
          </NavLink>
        </li>
        <li className="main-navigation__site">
          <NavLink to="/" className="site__home">
            <img
              className="home__icon"
              src="/images/home-icon.png"
              alt="home icon"
              width="50"
              height="50"
            ></img>
          </NavLink>
        </li>
      </ul>
    </NavigationBarStyled>
  );
};

export default NavigationBar;
