import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContentStyled = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  height: 400px;
`;

export const ModalContent = ({ children, onClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };
  return (
    <ModalContentStyled onClick={handleClick}>{children}</ModalContentStyled>
  );
};
