import LoginForm from "../../components/LoginForm/LoginForm";
import useLocalStorage from "../../hooks/useLocalStorage";
import useToken from "../../hooks/useToken";
import useUser from "../../hooks/useUser";
import { useAppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { UserCredentials, UserTokenStructure } from "../../store/types";
import { loginUserActionCreator } from "../../store/user/userSlice";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  const { getTokenData } = useToken();
  const { getUserToken } = useUser();
  const dispatch = useAppDispatch();
  const { setLocalStorageKey } = useLocalStorage();
  const navigate = useNavigate();

  const loginOnSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    if (!token) {
      return;
    }

    const userData = await getTokenData(token);

    const tokenData: UserTokenStructure = {
      ...userData,
      token,
    };
    dispatch(loginUserActionCreator(tokenData));
    setLocalStorageKey("token", token);
    navigate("/");
  };
  return (
    <LoginPageStyled>
      <h1 className="title">A blink, a story</h1>
      <LoginForm submitForm={loginOnSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
