import styled from "styled-components";

const MicroFormStyled = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 285px;
  align-items: center;
  padding: 10px;

  .form {
    &__label {
      margin-top: 10px;
      color: #344054;
      margin-bottom: 10px;
      align-self: flex-start;
      padding-left: 10px;
    }

    &__input-text,
    &__input-url,
    &__select,
    &__textarea,
    &__input-date {
      margin-top: 10px;
      padding: 10px;
      font-weight: bold;
      margin-bottom: 10px;
      align-self: flex-start;
      width: 100%;
      padding-left: 15px;
      border-radius: 5px;
      border: 2px solid #344054;
    }

    &__input-date {
      background-color: lightgrey;
      font-weight: normal;
    }

    &__input-text--author {
      background-color: lightgrey;
      font-weight: normal;
    }

    &__checkbox {
      margin-top: 10px;
      align-self: flex-start;
      margin-left: 10px;
      margin-bottom: 10px;
      width: 30px;
      height: 30px;
      border-radius: 5px;
      border: 2px solid #344054;
    }

    &__select {
      padding: 10px;
      border-radius: 5px;
      border: 2px solid #344054;
    }

    &__button--submit-on {
      margin-top: 25px;
      border-radius: 5px;
      background-color: ${(prop) => prop.theme.colors.secondary};
      width: 128px;
      height: 50px;
      font-size: 15px;
      text-transform: uppercase;
      font-weight: bold;
      border-radius: 5px;
      margin-bottom: 60px;
      margin-top: 100px;
      color: ${(prop) => prop.theme.colors.dark};
    }

    &__button--submit-off {
      margin-top: 25px;
      border-radius: 5px;
      background-color: ${(prop) => prop.theme.colors.deactivated};
      width: 128px;
      height: 50px;
      font-size: 15px;
      text-transform: uppercase;
      border-radius: 5px;
      margin-bottom: 50px;
      margin-top: 100px;
      color: ${(prop) => prop.theme.colors.buttonFiller};
    }
  }
`;

export default MicroFormStyled;
