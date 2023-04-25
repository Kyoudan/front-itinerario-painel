import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Error } from "../pages/Error";
import { Painel } from "../pages/Painel";
import { PrivateRoute } from "../components/PrivateRoute";
import { Postagens } from "../pages/Postagens";
import { CreatePostagens } from "../pages/CreatePostagens";
import { EditPostagens } from "../pages/EditPostagens";
import { Tags } from "../pages/Tags";
import { TagsCreate } from "../pages/TagsCreate";

export const RoutesProject = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />

        <Route
          element={
            <PrivateRoute>
              <Painel />
            </PrivateRoute>
          }
          path="/painel"
        />

        <Route
          element={
            <PrivateRoute>
              <Postagens />
            </PrivateRoute>
          }
          path="/postagens"
        />

        <Route
          element={
            <PrivateRoute>
              <CreatePostagens />
            </PrivateRoute>
          }
          path="/postagens/create"
        />

        <Route
          element={
            <PrivateRoute>
              <EditPostagens />
            </PrivateRoute>
          }
          path="/postagens/:slug"
        />

        <Route
          element={
            <PrivateRoute>
              <Tags />
            </PrivateRoute>
          }
          path="/tags"
        />

        <Route
          element={
            <PrivateRoute>
              <TagsCreate />
            </PrivateRoute>
          }
          path="/tags/create"
        />

        <Route element={<Error />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};
