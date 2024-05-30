import styled from "styled-components";

export const Horizontal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;

export const Vertical = styled(Horizontal)`
  flex-direction: column;
`;
