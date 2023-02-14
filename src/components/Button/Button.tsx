import ButtonStyled from "./ButtonStyled";

const Button = (): JSX.Element => {
  return (
    <ButtonStyled className="delete-button">
      <span className="delete-button__icon">✖️</span>
    </ButtonStyled>
  );
};

export default Button;
