import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ToDoList from "../../components/ToDoList";
import { ToDoContext } from "../../providers/todoList";
import { UserContext } from "../../providers/user";
import api from "../../services/api";
import { HeadTypo, Container, Button } from "./styles";

const Users = () => {
  const params = useParams();
  const { users } = useContext(UserContext);
  const { todo, setTodo } = useContext(ToDoContext);
  const [modalOpen, setModalOpen] = useState(false);
  const user = users.find((user) => user.id.toString() === params.user_id);

  useEffect(() => {
    api
      .get(`/todos/?userId=${user.id}`)
      .then((response) => {
        setTodo(response.data);
      })
      .catch((err) => console.log(err));
  }, [setTodo, user.id]);

  return (
    <>
      <Container>
        <HeadTypo>Lista de tarefas do usuário {user.name}</HeadTypo>
        <Button onClick={() => setModalOpen(true)}>Criar tarefa</Button>
      </Container>
      <ToDoList
        todo={todo}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        user={user}
      />
    </>
  );
};

export default Users;
