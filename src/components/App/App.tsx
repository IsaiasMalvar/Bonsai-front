import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import Layout from "../Layout/Layout";
import useToken from "../../hooks/useToken/useToken";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useEffect } from "react";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserTokenStructure } from "../../store/types";
import GoToTop from "../../utils/GoToTop";

const App = (): React.ReactElement => {
  const { getTokenData } = useToken();
  const { getLocalStorageKey } = useLocalStorage();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getLocalStorageKey("token");
    if (!token) {
      return;
    }
    const userData = getTokenData(token);

    const tokenData: UserTokenStructure = {
      ...userData,
      token,
    };

    dispatch(loginUserActionCreator(tokenData));
  }, [dispatch, getLocalStorageKey, getTokenData, navigate]);

  return (
    <>
      <GoToTop />
      <Layout />
    </>
  );
};

export default App;
