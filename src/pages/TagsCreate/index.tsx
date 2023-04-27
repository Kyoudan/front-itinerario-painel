import { Container } from "../../components/Container";
import { Header } from "../Tags/components/Header";
import { useNavigate } from "react-router";
import * as S from "./style";
import { Message } from "../../components/Message";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import Cookies from "js-cookie";
import * as B from "../../components/Button";

export const TagsCreate = () => {
  const [name, setName] = useState<string>();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreateCategories = async () => {
    try {
      setLoading(true);
      const result = await api.post(
        "/posttags",
        {
          name: name,
        },
        {
          headers: {
            Authorization: `${Cookies.get("token")}`,
          },
        }
      );
      console.log(result);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (name) {
      setDisabled(false);
    }
  }, [name]);

  return (
    <Container>
      <S.styledDiv>
        <Header navigate={useNavigate()} />

        <S.styledFormArea>
          <Message
            message="Criar categorias"
            fontFamily="Montserrat, sans-serif"
            fontSize="1.8em"
          />
          <TextField
            style={{ width: "50%" }}
            label="Nome"
            onChange={(e) => setName(e.target.value)}
          />

          {!loading ? (
            <Button
              variant="outlined"
              style={{ width: "50%" }}
              disabled={disabled}
              onClick={handleCreateCategories}
            >
              Criar
            </Button>
          ) : (
            <B.Button
              width="50%"
              border="none"
              backgroundColor="#fff"
              isLoading={true}
              colorLoading="#000"
              justifyContent="center"
            />
          )}
        </S.styledFormArea>
      </S.styledDiv>
    </Container>
  );
};
