import { NavLink } from "react-router-dom";
const NavigationBar = (): React.ReactElement => {
  return (
    <ul className="main-navigation">
      <li className="main-navigation__site">
        <NavLink to="/login" className="site__logout">
          <img
            className="logout__icon"
            src="/images/checkout-icon.svg"
            alt="logout icon"
          ></img>
        </NavLink>
      </li>
      <li className="main-navigation__site">
        <NavLink to="/add" className="site__add">
          <img
            className="add__icon"
            src="/images/add-icon.svg"
            alt="add icon"
          ></img>
        </NavLink>
      </li>
      <li className="main-navigation__site">
        <NavLink to="/add" className="site__home">
          <img
            className="home__icon"
            src="/images/home-icon.svg"
            alt="home icon"
          ></img>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationBar;
