import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

interface LoginFormProps {
  submitForm: () => void;
}

const LoginForm = ({ submitForm }: LoginFormProps): React.ReactElement => {
  const initialUserState = { username: "", password: "" };
  const [loginData, setLoginData] = useState(initialUserState);
  const onChangeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };

  const handleLoginOnSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    submitForm();
    setLoginData(initialUserState);
  };

  const isDisabled = !loginData.username || !loginData.password;

  return (
    <LoginFormStyled onSubmit={handleLoginOnSubmit}>
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
        type="password"
        id="password"
        onChange={onChangeUserData}
        value={loginData.password}
      />
      <button
        type="submit"
        className={`form__button--submit${isDisabled ? "-off" : "-on"}`}
        disabled={isDisabled}
      >
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
