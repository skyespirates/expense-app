import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: crimson;
  color: #fff;
  cursor: pointer;
`;

const Button = ({ children = "button", onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
