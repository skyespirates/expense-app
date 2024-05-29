import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  ${(props) => props.size === "sm" && "padding: 3px 9px;"}
  ${(props) => props.size === "md" && "padding: 6px 18px;"}
  ${(props) => props.size === "lg" && "padding: 8px 24px;"}
  border: 1px solid grey;
  border-radius: 5px;
  background-color: crimson;
  color: #fff;
  cursor: pointer;
`;

const Button = ({ children = "button", size = "sm", onClick }) => {
  return (
    <StyledButton onClick={onClick} size={size}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
};

export default Button;
