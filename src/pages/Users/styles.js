import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 20px;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 425px) {
    width: 100%;
    display: flex;
    margin: 0px 0px 20px 0px;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeadTypo = styled.div`
  font-size: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  width: 10%;
  outline: none;
  border: none;
  border-radius: 10px;

  cursor: pointer;

  color: white;
  background-color: var(--cardColor);

  :hover {
    background-color: var(--hover);
  }

  @media (max-width: 425px) {
    width: 40%;
    height: 35px;
    margin-top: 20px;
  }
`;
