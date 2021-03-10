import styled from 'styled-components';

export const MenuContainer = styled.nav`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  color: #ccc;

  font-size: 2rem;
  font-weight: 800;
  padding: 1rem;

  div {
    margin: 1px;
    text-align: left;
    padding: 1rem 0;

    background-color: red;
  }
`;
