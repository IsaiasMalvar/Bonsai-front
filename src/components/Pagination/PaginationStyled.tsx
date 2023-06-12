import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .button__previous,
  .button__next {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;

    &:disabled {
      color: ${(prop) => prop.theme.colors.secondary};
    }
  }

  .button__next {
    margin-top: 25px;
  }
`;

export default PaginationStyled;
