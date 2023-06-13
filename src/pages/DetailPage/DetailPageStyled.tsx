import styled from "styled-components";

const DetailPageStyled = styled.article`
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;

  h2,
  h3 {
    margin: 0px;
    text-align: unset;
    padding-bottom: 15px;
  }

  p {
    margin-bottom: 100px;
  }

  .micro {
    &__image {
      filter: grayscale(100%);
      border-radius: 5px;
      margin-bottom: 10px;
    }

    &__info {
      padding: 10px;
      display: flex;
      flex-direction: column;
      text-align: left;
      overflow-wrap: anywhere;
      line-height: 25px;
      margin-top: 40px;
    }
  }
`;

export default DetailPageStyled;
