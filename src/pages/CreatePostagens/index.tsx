import { Container } from "../../components/Container";
import { Header } from "../Postagens/components/Header";
import { useNavigate } from "react-router";
import * as S from "./style";
import { Message } from "../../components/Message";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import Cookies from "js-cookie";
import { Categories, IAxios } from "./types";
import { Input } from "../../components/Input";
import * as B from "../../components/Button";

export const CreatePostagens = () => {
  const [categories, setCategories] = useState<Categories[]>();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [type, setType] = useState<number>(1);
  const [color, setColor] = useState<string>("#000");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetCategories = async () => {
    try {
      const result: IAxios = await api.get("/postTags", {
        headers: {
          Authorization: `${Cookies.get("token")}`,
        },
      });
      setCategories(result.data.data);
    } catch {}
  };

  const handleCreateCategories = async () => {
    try {
      setLoading(true);
      const result = await api.post(
        "/post",
        {
          name: title,
          color,
          postTagsId: type,
          description,
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
    console.log(type);
    if (title && description && type && color) {
      setDisabled(false);
    }
  }, [title, description, type, color]);

  useEffect(() => {
    handleGetCategories();
  }, []);

  return (
    <Container>
      <S.styledDiv>
        <Header navigate={useNavigate()} />
        {categories ? (
          <S.styledFormArea>
            <Message
              message="Criar postagens"
              fontFamily="Montserrat, sans-serif"
              fontSize="1.8em"
            />
            <TextField
              style={{ width: "50%" }}
              label="Titulo"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              style={{ width: "50%" }}
              label="Descrição"
              onChange={(e) => setDescription(e.target.value)}
            />

            <FormControl style={{ width: "50%" }}>
              <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Teste"
                defaultValue={type}
                onChange={(e) =>
                  setType(
                    typeof e.target.value === "string"
                      ? parseInt(e.target.value)
                      : e.target.value
                  )
                }
              >
                {categories.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <div
              style={{
                width: "51%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Message
                message="Cor:"
                fontFamily="sans-serif"
                fontSize="1em"
                color="#808080"
                margin="0px 0px 0px 15px"
              />
              <Input
                width="66px"
                height="50px"
                sizeHeight="50"
                margin="0"
                border="0"
                mediaCustom="width: 95%"
                type="color"
                onText={(e) => setColor(e.target.value)}
              />
            </div>
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
        ) : (
          <></>
        )}
      </S.styledDiv>
    </Container>
  );
};
