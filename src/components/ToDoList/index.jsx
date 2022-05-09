import CheckTodo from "../CheckToDo";
import Modal from "../Modal";
import { Card, Container, NameTypo } from "./styles";

const ToDoList = ({ todo, handleChange, setModalOpen, modalOpen, user }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      {todo.map((todo) => (
        <Card key={todo.id}>
          <NameTypo>{todo.title}</NameTypo>
          <CheckTodo todo={todo} createTodo={() => handleChange(todo.id)} />
        </Card>
      ))}
      {modalOpen && (
        <Modal
          onClose={closeModal}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          user={user}
        />
      )}
    </Container>
  );
};

export default ToDoList;
