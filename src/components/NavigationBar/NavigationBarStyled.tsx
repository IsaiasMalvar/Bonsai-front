import styled from "styled-components";

const NavigationBarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 100vh;
  padding-bottom: 10px;
  width: 100%;

  .main-navigation {
    display: flex;
    list-style: none;
    width: inherit;
    justify-content: space-around;
    padding-left: 0px;
    margin: 0px;
  }
`;

export default NavigationBarStyled;
