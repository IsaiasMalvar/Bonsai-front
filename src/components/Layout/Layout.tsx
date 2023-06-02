import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import NavigationBar from "../NavigationBar/NavigationBar";

const Layout = (): React.ReactElement => {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <ContainerStyled>
        <Outlet />
        {pathname !== "/login" && <NavigationBar />}
      </ContainerStyled>
    </>
  );
};

export default Layout;
