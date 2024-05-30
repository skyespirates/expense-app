import { Horizontal, Vertical } from "./styled";
import PropTypes from "prop-types";

const Stack = ({ variant = "h", gap = "0px", children }) => {
  return variant === "h" ? (
    <Horizontal gap={gap}>{children}</Horizontal>
  ) : (
    <Vertical gap={gap}>{children}</Vertical>
  );
};

Stack.propTypes = {
  variant: PropTypes.oneOf(["h", "v"]),
  children: PropTypes.any,
  gap: PropTypes.string,
};

export default Stack;
