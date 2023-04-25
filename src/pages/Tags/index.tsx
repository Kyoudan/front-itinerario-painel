import { Container } from "../../components/Container";
import { useNavigate } from "react-router";
import { Header } from "./components/Header";

export const Tags = () => {
  return (
    <Container>
      <div>
        <Header navigate={useNavigate()} />
      </div>
    </Container>
  );
};
