import styled from "styled-components";

const DetailPageStyled = styled.article`
  position: relative;
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  margin: 20px auto 0;
  max-width: 467px;

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
    &__image-container {
      position: relative;
    }

    &__image {
      filter: grayscale(100%);
      border-radius: 5px;
      margin-bottom: 10px;
      width: 100%;
      object-fit: cover;
      display: block;
    }

    &__modify-button {
      position: absolute;
      top: 10px;
      right: 10px;
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
