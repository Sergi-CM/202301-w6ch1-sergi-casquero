import styled from "styled-components";

const TaskCardStyled = styled.article`
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(#abdaab, #1fca1f);
  border: 3px solid green;
  border-radius: 10px;
  padding: 30px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    background-color: red;
    transform: translateY(-5%);
  }

  .task-card {
    &__title {
      text-transform: uppercase;
    }
  }
`;

export default TaskCardStyled;
