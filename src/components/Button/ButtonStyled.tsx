import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
  cursor: pointer;
  transition: all 0.08s linear;

  &:hover {
    background-color: #c73939;
  }
`;

export default ButtonStyled;
