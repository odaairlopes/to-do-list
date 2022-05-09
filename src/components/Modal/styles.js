import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  border: none;
  border-radius: 8px;
  position: absolute;

  background-color: var(--cardColor);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  padding: 10px;

  h1 {
    color: white;
  }

  input {
    width: 250px;
    height: 30px;
    border-radius: 5px;
    border: none;
    margin: 10px;
    padding: 5px;

    :focus {
      outline: none;
    }
  }

  button {
    width: 150px;
    height: 40px;
    margin: 10px;
    border: none;
    border-radius: 8px;
    background-color: var(--headerColor);
    :hover {
      cursor: pointer;
      background-color: var(--backgroundColor);
    }
  }

  span {
    font-size: 1.5rem;

    :hover {
      cursor: pointer;
      color: var(--hover);
    }
  }
`;
