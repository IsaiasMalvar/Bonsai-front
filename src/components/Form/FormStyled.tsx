import styled from "styled-components";

const FormStyled = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 285px;
  align-items: center;

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

    &__button {
      margin-top: 25px;
      border-radius: 5px;
      background-color: ${(props) => props.theme.colors.secondary};
      width: 128px;
      height: 50px;
      font-size: 15px;
      text-transform: uppercase;
      font-weight: bold;
      border-radius: 5px;
      margin-bottom: 50px;
      margin-top: 20px;
    }
  }
`;

export default FormStyled;
