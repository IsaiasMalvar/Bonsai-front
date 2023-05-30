import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <LoginFormStyled>
      <label htmlFor="username" className="form__label--username">
        Username:
      </label>
      <input className="form__input--username" type="text" id="username" />
      <label htmlFor="password" className="form__label--password">
        Password:
      </label>
      <input className="form__input--password" type="text" id="password" />
      <button type="submit" className="form__button--submit">
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
