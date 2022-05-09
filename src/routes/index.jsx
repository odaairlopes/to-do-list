import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/:user_id" element={<Users />} />
    </Routes>
  );
};
