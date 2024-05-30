import styled from "styled-components";
import PropTypes from "prop-types";
const StyledInput = styled.input`
  padding: 6px;
  outline: none;
  ${(props) => props.maxWidth && "display: inline-block; width: 100%;"}
`;

const Input = ({
  type = "text",
  placeholder = "input data",
  value,
  maxWidth,
  onChange,
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxWidth={maxWidth}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Input;
