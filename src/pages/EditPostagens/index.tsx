import { useParams } from "react-router";

export const EditPostagens = () => {
  const { slug } = useParams();
  console.log(slug);
  return <h1>Você está na pagina: {slug}</h1>;
};
