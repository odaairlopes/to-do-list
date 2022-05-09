import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CheckTodoContainer, TodoContent } from "./styles";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { UserContext } from "../../providers/user";
import api from "../../services/api";
import { useEffect } from "react";

const CheckTodo = ({ todo }) => {
  const params = useParams();
  const { users } = useContext(UserContext);

  const userId = users.find((user) => user.id.toString() === params.user_id);
  useEffect(() => {
    api.get(`/todos/?userId=${userId}`);
  }, [userId.id]);

  const updateTodoStatus = (todoId, status) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: status,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (completed, id) => {
    updateTodoStatus(id, completed);
  };

  return (
    <CheckTodoContainer>
      {todo.completed ? (
        <TodoContent>
          <span onClick={(e) => handleChange(todo.completed, todo.id)}>
            <FaCheckCircle />
          </span>
          <span> Completed</span>
        </TodoContent>
      ) : (
        <TodoContent>
          <span onClick={(e) => handleChange(todo.completed, todo.id)}>
            <FaExclamationCircle />
          </span>
          <span> Incompleted</span>
        </TodoContent>
      )}
    </CheckTodoContainer>
  );
};

export default CheckTodo;
