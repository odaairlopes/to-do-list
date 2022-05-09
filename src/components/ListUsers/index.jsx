import { useNavigate } from "react-router-dom";
import { Card, NameTypo } from "./styles";

const ListUsers = ({ users }) => {
  const navigate = useNavigate();

  return (
    <>
      {users.map((user) => (
        <Card key={user.id} onClick={() => navigate(`${user.id}`)}>
          <NameTypo>{user.name}</NameTypo>
          <p>{user.email}</p>
          <p>{user.username}</p>
        </Card>
      ))}
    </>
  );
};

export default ListUsers;
