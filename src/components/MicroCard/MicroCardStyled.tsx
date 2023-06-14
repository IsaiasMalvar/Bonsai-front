import styled from "styled-components";

const MicroCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 300px;
  min-height: 500px;
  padding: 10px;
  margin-top: 20px;
  background-color: ${(prop) => prop.theme.colors.light};
  color: ${(prop) => prop.theme.colors.dark};

  a {
    width: 277px;
  }

  &.card__container--stranger {
    display: flex;
    flex-direction: column;
    justify-content: left;
    max-width: 300px;
    min-height: 500px;
    padding: 10px;
    margin-top: 20px;
    background-color: ${(prop) => prop.theme.colors.dark};
    color: ${(prop) => prop.theme.colors.light};
  }
  .card {
    &__title {
      font-size: 30px;
      padding-inline: 25px;
    }

    h3 {
      padding: 0;
    }

    &__image {
      filter: grayscale(100%);
      margin-bottom: 10px;
      max-width: 277px;
      word-break: break-all;
      object-fit: cover;
      cursor: pointer;
    }

    &__list {
      padding: 10px;
      display: flex;
      flex-direction: column;
      text-align: left;
      width: 100%;
    }

    &__item {
      margin-bottom: 5px;
      padding: 15px;
      font-size: ${(prop) => prop.theme.fontSizes.regular};
      white-space: break-spaces;
      font-weight: bold;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
    }

    &__button--delete {
    }
  }
`;

export default MicroCardStyled;
