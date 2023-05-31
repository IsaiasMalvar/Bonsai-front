import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  align-items: center;
  margin-top: 15px;

  .form__label--username,
  .form__label--password {
    margin-bottom: 10px;
    margin-right: 150px;
    padding: 5px;
  }

  .form__input--username,
  .form__input--password {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    font-size: ${(prop) => prop.theme.fontSizes.medium};
  }

  .form__button--submit-off {
    background-color: ${(prop) => prop.theme.colors.deactivated};
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${(prop) => prop.theme.colors.buttonFiller};
    padding: 10px 20px;
    margin-top: 60px;
    width: 128px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }

  .form__button--submit-on {
    background-color: ${(prop) => prop.theme.colors.secondary};
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    color: ${(prop) => prop.theme.colors.dark};
    font-weight: bold;
    padding: 10px 20px;
    margin-top: 60px;
    width: 128px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export default LoginFormStyled;
