import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  ${(props) => props.size === "sm" && "padding: 3px 9px;"}
  ${(props) => props.size === "md" && "padding: 6px 18px;"}
  ${(props) => props.size === "lg" && "padding: 8px 24px;"}
  border: 1px solid grey;
  border-radius: 5px;
  background-color: ${(props) =>
    props.variant === "primary" ? "crimson;" : "transparent;"};
  color: ${(props) => (props.variant === "primary" ? "white" : "black")};
  cursor: pointer;
`;

const Button = ({
  children = "button",
  size = "sm",
  variant = "primary",
  onClick,
}) => {
  return (
    <StyledButton onClick={onClick} size={size} variant={variant}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
};

export default Button;
