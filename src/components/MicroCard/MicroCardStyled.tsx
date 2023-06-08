import styled from "styled-components";

const MicroCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 500px;
  min-height: 500px;
  padding: 10px;
  margin-top: 20px;
  border-style: double;
  background-color: ${(prop) => prop.theme.colors.light};
  color: ${(prop) => prop.theme.colors.dark};

  .card {
    &__title {
      font-size: 30px;
      margin-bottom: 10px;
      margin-top: 20px;
    }

    &__image {
      filter: grayscale(100%);
      border: 1px solid black;
      margin-bottom: 10px;
    }

    &__list {
      padding: 10px;
      display: flex;
      flex-direction: column;
      text-align: left;
      width: 80%;
    }

    &__item {
      margin-bottom: 5px;
      padding: 15px;
      font-size: ${(prop) => prop.theme.fontSizes.regular};
      word-break: break-all;
    }

    &__button--delete {
    }
  }
`;

export default MicroCardStyled;
