import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useAppSelector } from "../../store";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";

const Layout = (): React.ReactElement => {
  const {
    modals: { isError, isOn, message, image },
    isLoading,
  } = useAppSelector((state) => state.uiStore);

  const { pathname } = useLocation();
  return (
    <>
      {isLoading && <Loader />}
      {isOn && <Modal text={message} isError={isError} image={image} />}
      <Header />
      <Outlet />
      {pathname !== "/login" && <NavigationBar />}
    </>
  );
};

export default Layout;
