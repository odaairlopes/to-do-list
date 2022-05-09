import styled from "styled-components";

export const Heading = styled.header`
  width: 100%;

  color: var(--whiteColor);

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  margin-bottom: 20px;

  @media (min-width: 425px) {
    display: flex;
    justify-content: center;

    background-color: var(--headerColor);
  }
`;
