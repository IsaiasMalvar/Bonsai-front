import styled from "styled-components";

const ModalStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.652);
  z-index: 1;

  .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    width: 281px;
    height: 258px;
    background: #e1e1e1;
    border: 5px solid #309973;
    border-radius: 50px;
    padding: 5px;
  }

  .modal-container--error {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    width: 281px;
    height: 258px;
    background: #e1e1e1;
    border: 5px solid #910101;
    border-radius: 50px;
    padding: 5px;
  }

  .model-container__message {
    line-height: 1.5;
  }

  .modal-container__button--close {
    padding: 10px;
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    border: 2px solid #000000;
    border-radius: 10px;
  }
`;

export default ModalStyled;
