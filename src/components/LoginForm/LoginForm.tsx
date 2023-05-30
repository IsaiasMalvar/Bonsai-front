import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const onChangeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <LoginFormStyled>
      <label htmlFor="username" className="form__label--username">
        Username:
      </label>
      <input
        className="form__input--username"
        type="text"
        id="username"
        onChange={onChangeUserData}
        value={loginData.username}
      />
      <label htmlFor="password" className="form__label--password">
        Password:
      </label>
      <input
        className="form__input--password"
        type="text"
        id="password"
        onChange={onChangeUserData}
        value={loginData.username}
      />
      <button type="submit" className="form__button--submit">
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
