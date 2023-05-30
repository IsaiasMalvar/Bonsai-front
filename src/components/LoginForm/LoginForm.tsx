const LoginForm = (): React.ReactElement => {
  return (
    <form>
      <label htmlFor="username" className="form__label--username">
        Username:
      </label>
      <input className="form__input--username" type="text" id="username" />
      <label htmlFor="password" className="form_label--password">
        Password:
      </label>
      <input className="form__input--password" type="text" id="password" />
    </form>
  );
};

export default LoginForm;
