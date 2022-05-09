import { useState } from "react";
import { ModalContainer } from "./styles";

const Modal = ({ onClose, setModalOpen, modalOpen, user }) => {
  const [value, setValue] = useState("");
  const createNewTodo = (newTodo) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: newTodo,
        body: "bar",
        userId: user.id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then(() => {
        onClose();
        setModalOpen(false);
      });
  };

  return (
    <ModalContainer modalOpen={modalOpen}>
      <span onClick={onClose}>X</span>
      <h1>Criar nova tarefa</h1>
      <input
        type="text"
        placeholder="To do..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => createNewTodo(setValue)}>Create</button>
    </ModalContainer>
  );
};

export default Modal;
