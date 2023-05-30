import LoginForm from "../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <h1 className="heading__title">A blink, a story</h1>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
