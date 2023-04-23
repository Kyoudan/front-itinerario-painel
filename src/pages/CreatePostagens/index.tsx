import { Container } from "../../components/Container";
import { Header } from "../Postagens/components/Header";
import { useNavigate } from "react-router";

export const CreatePostagens = () => {
  return (
    <Container>
      <div>
        <Header navigate={useNavigate()} />
        <h1>Create Postagens</h1>
      </div>
    </Container>
  );
};
