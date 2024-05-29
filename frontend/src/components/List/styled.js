import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const ListItem = styled.li`
  list-style-type: none;
  border: 1px solid crimson;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
