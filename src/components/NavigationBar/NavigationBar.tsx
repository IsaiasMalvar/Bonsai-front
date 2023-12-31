import { NavLink, useLocation, useNavigate } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";
import { useAppDispatch } from "../../store";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { logoutUserActionCreator } from "../../store/user/userSlice";

const NavigationBar = (): React.ReactElement => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { removeLocalStorageKey } = useLocalStorage();
  const navigate = useNavigate();

  const logoutOnClick = () => {
    dispatch(logoutUserActionCreator());
    removeLocalStorageKey("token");
    navigate("/login");
  };

  return (
    <NavigationBarStyled>
      <ul className="main-navigation">
        <li className="main-navigation__site">
          <button
            className="site__logout"
            aria-label="logout"
            onClick={logoutOnClick}
          >
            <img
              className="logout__icon"
              src="/images/checkout-icon.svg"
              alt="logout icon"
              width="50"
              height="50"
            ></img>
          </button>
        </li>
        <li className="main-navigation__site">
          <NavLink to="/create" className="site__add">
            <img
              className="add__icon"
              src={`${
                pathname !== "/create"
                  ? "/images/add-icon.png"
                  : "/images/add-icon-on-page.png"
              }`}
              alt={`${
                pathname !== "/create" ? "add icon" : "add icon on page"
              }`}
              width="50"
              height="50"
            ></img>
          </NavLink>
        </li>
        <li className="main-navigation__site">
          <NavLink to="/home" className="site__home">
            <img
              className="home__icon"
              src={`${
                pathname !== "/home"
                  ? "/images/home-icon.png"
                  : "/images/home-icon-on-home.png"
              }`}
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
