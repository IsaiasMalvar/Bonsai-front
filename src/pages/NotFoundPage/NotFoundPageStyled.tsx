import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;

  .title {
    font-size: ${(prop) => prop.theme.fontSizes.big};
    margin-bottom: 50px;
  }

  .not-found__image {
    border-radius: 10px;
  }

  .link__home {
    position: sticky;
    top: 100vh;
    margin-top: 80px;
    padding-bottom: 10px;
    width: 100%;
  }

  .detail {
    margin-top: 50px;
    font-weight: bold;
    font-size: ${(prop) => prop.theme.fontSizes.regular};
  }
`;

export default NotFoundPageStyled;
