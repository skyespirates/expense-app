import styled from "styled-components";
import PropTypes from "prop-types";
const StyledInput = styled.input`
  padding: 6px;
  outline: none;
`;

const Input = ({
  type = "text",
  placeholder = "input data",
  value,
  onChange,
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default Input;
