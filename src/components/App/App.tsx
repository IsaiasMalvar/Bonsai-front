import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import Layout from "../Layout/Layout";
import useToken from "../../hooks/useToken/useToken";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useEffect } from "react";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserTokenStructure } from "../../store/types";

const App = (): React.ReactElement => {
  const { getTokenData } = useToken();
  const { getLocalStorageKey } = useLocalStorage();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const token = getLocalStorageKey("key");

  useEffect(() => {
    if (token) {
      const userData = getTokenData(token);

      const tokenData: UserTokenStructure = {
        ...userData,
        token,
      };

      dispatch(loginUserActionCreator(tokenData));

      navigate("/");
    }
  }, [getTokenData, dispatch, navigate, token]);

  return <Layout />;
};

export default App;
