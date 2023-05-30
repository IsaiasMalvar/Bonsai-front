import LoginForm from "../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <h1 className="title">A blink, a story</h1>
      <LoginForm
        submitForm={(): void => {
          throw new Error("Function not implemented.");
        }}
      />
    </LoginPageStyled>
  );
};

export default LoginPage;
