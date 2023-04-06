import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Error } from "../pages/Error";

export const RoutesProject = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Error />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};
