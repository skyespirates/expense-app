import styled from "styled-components";
import PropTypes from "prop-types";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Center = ({ children }) => {
  return <Flex>{children}</Flex>;
};

Center.propTypes = {
  children: PropTypes.any,
};

export default Center;
