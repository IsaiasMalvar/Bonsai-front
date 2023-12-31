import styled from "styled-components";

const NavigationBarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  bottom: 0vh;
  padding-bottom: 10px;
  width: 100%;
  background-color: ${(prop) => prop.theme.colors.primary};
  z-index: 1;

  .main-navigation {
    display: flex;
    list-style: none;
    width: inherit;
    justify-content: space-around;
    align-items: center;
    padding-top: 7px;
  }
`;

export default NavigationBarStyled;
