import { createContext, useState } from "react";

export const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  return (
    <ToDoContext.Provider value={{ todo, setTodo, openModal, setOpenModal }}>
      {children}
    </ToDoContext.Provider>
  );
};
export default ToDoProvider;
