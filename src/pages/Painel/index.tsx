import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

export const Painel = () => {
  const { user, VerifyToken } = useContext(AuthContext);

  useEffect(() => {
    VerifyToken();
  }, []);

  return (
    <>
      {user && (
        <h1>
          Olá: {user.name}, seu email é: {user.email}
        </h1>
      )}
    </>
  );
};
