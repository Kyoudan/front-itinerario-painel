import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Container } from "../../components/Container";
import { MessageBalloon } from "../../hooks/Message";

export const Painel = () => {
  const { user, VerifyToken } = useContext(AuthContext);
  const { element, visible, setVisible, setMessage, setTitle, setType } =
    MessageBalloon();

  useEffect(() => {
    setVisible(true);
    setTitle("Teste");
    setMessage("Minha descrição");
    setType("warning");
    VerifyToken();
  }, []);

  return <>{user && <Container>{visible && element}</Container>}</>;
};
