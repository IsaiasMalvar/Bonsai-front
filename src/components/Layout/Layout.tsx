import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useAppSelector } from "../../store";
import Modal from "../Modal/Modal";
import { wrongCredentialsModal } from "../Modal/modals";

const Layout = (): React.ReactElement => {
  const { isError } = useAppSelector((state) => state.uiStore);
  const { isOn } = useAppSelector((state) => state.uiStore);
  const { pathname } = useLocation();
  return (
    <>
      {isError && isOn && (
        <Modal text={wrongCredentialsModal.message} isError />
      )}
      <Header />
      <ContainerStyled>
        <Outlet />
        {pathname !== "/login" && <NavigationBar />}
      </ContainerStyled>
    </>
  );
};

export default Layout;
