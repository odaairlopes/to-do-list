import styled from "styled-components";

export const Card = styled.div`
  width: 30%;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--cardColor);

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  p {
    margin: 5px;
    color: var(--whiteColor);
    text-decoration: none;
    outline: none;
  }

  :hover {
    background-color: var(--hover);
    cursor: pointer;
  }

  @media (max-width: 425px) {
    width: 50%;
    height: 50%;

    :hover {
      background-color: var(--hover);
      cursor: pointer;
    }
  }
`;

export const NameTypo = styled.p`
  font-weight: 600;
  font-size: 20px;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;
