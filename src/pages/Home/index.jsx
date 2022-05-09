import api from "../../services/api";
import { useContext, useEffect } from "react";
import { Container } from "./styles";
import { UserContext } from "../../providers/user";
import ListUsers from "../../components/ListUsers";

const Home = () => {
  const { users, setUsers } = useContext(UserContext);
  useEffect(() => {
    api
      .get("/users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, [setUsers]);

  return (
    <Container>
      <ListUsers users={users} />
    </Container>
  );
};

export default Home;
