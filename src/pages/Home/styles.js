import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 425px) {
    width: 100%;
    height: 50%;
    display: flex;
    flex-grow: 3;
  }
`;
