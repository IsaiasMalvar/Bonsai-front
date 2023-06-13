import LoginForm from "../../components/LoginForm/LoginForm";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { UserCredentials, UserTokenStructure } from "../../store/types";
import { loginUserActionCreator } from "../../store/user/userSlice";
import LoginPageStyled from "./LoginPageStyled";
import ContainerStyled from "../../components/shared/ContainerStyled";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();
  const { setLocalStorageKey } = useLocalStorage();
  const navigate = useNavigate();

  const loginOnSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    if (token) {
      const userData = await getTokenData(token);

      const tokenData: UserTokenStructure = {
        ...userData,
        token,
      };

      dispatch(loginUserActionCreator(tokenData));
      setLocalStorageKey("token", token);
      navigate("/home");
    }
  };

  return (
    <ContainerStyled>
      <LoginPageStyled>
        <h1 className="title">A blink, a story</h1>
        <LoginForm submitForm={loginOnSubmit} />
      </LoginPageStyled>
    </ContainerStyled>
  );
};

export default LoginPage;
