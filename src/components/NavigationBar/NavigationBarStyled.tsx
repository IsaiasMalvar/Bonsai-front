import styled from "styled-components";

const NavigationBarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 90vh;
  padding-bottom: 10px;
  width: 100%;
  background-color: ${(prop) => prop.theme.colors.primary};

  .main-navigation {
    display: flex;
    list-style: none;
    width: inherit;
    justify-content: space-around;
    padding-left: 0px;
    margin: 3px;
  }
`;

export default NavigationBarStyled;
