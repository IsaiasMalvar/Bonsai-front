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
  background-color: black;
  color: ${(prop) => prop.theme.colors.light};

  .card-heading {
    font-size: 30px;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .card-image {
    filter: grayscale(100%);
  }

  .card-image {
    margin-bottom: 10px;
  }

  .card-list {
    padding: 10px;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 80%;
  }

  .card__list-item {
    margin-bottom: 5px;
    padding: 15px;
    font-size: ${(prop) => prop.theme.fontSizes.regular};
  }
`;

export default MicroCardStyled;
