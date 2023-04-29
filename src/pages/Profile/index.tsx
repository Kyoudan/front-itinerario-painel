import Cookies from "js-cookie";
import { Container } from "../../components/Container";
import * as S from "./style";
import { Box, Avatar, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import jwtDecode from "jwt-decode";
import { IAxiosUser, IUser } from "./types";
import { Message } from "../../components/Message";
import { ModalComponent } from "../../components/Modal";
import * as B from "../../components/Button";

export const Profile = () => {
  const [user, setUser] = useState<IUser>();
  const [date, setDate] = useState<string>();
  const [modalUpdateImage, setModalUpdateImage] = useState<boolean>(false);
  const [image, setImage] = useState<string>();
  const [disableImage, setDisableImage] = useState<boolean>(true);
  const [loadingImage, setLoadingImage] = useState<boolean>(false);

  const style = {
    width: "90%",
    height: "500px",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    borderRadius: "10px",
  };

  const subStyle = {
    width: "50%",
    bgcolor: "background.paper",
    border: "1px solid #1c1c1c",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    borderRadius: "10px",
    backgroundColor: "#1c1c1c",
  };

  const closeModalUpdateImage = () => {
    setModalUpdateImage(false);
  };

  const getAllDices = async () => {
    try {
      const token = Cookies.get("token");

      if (!token) return;

      const user: IUser = jwtDecode(token);

      if (!user) return;

      const result: IAxiosUser = await api.get(`/admins/${user.id}`, {
        headers: {
          Authorization: `${Cookies.get("token")}`,
        },
      });

      setUser(result.data);

      const data = new Date(result.data.createdAt);

      const dia = data.getDate();
      const mes = data.getMonth() + 1;
      const ano = data.getFullYear();
      const hora = data.getHours();
      const minuto = data.getMinutes();
      const segundo = data.getSeconds();

      const dataFormatada =
        dia.toString().padStart(2, "0") +
        "/" +
        mes.toString().padStart(2, "0") +
        "/" +
        ano +
        " " +
        hora.toString().padStart(2, "0") +
        ":" +
        minuto.toString().padStart(2, "0") +
        ":" +
        segundo.toString().padStart(2, "0");

      setDate(dataFormatada);
      setImage(result.data.image);
    } catch {}
  };

  const updateImage = async () => {
    try {
      setLoadingImage(true);
      await api.put(
        "/adminimage",
        {
          image,
        },
        {
          headers: {
            Authorization: `${Cookies.get("token")}`,
          },
        }
      );
      getAllDices();
      setLoadingImage(false);
      setModalUpdateImage(false);
    } catch {
      setModalUpdateImage(false);
    }
  };

  useEffect(() => {
    getAllDices();
  }, []);

  useEffect(() => {
    if (user && user.image != image && image) {
      setDisableImage(false);
    } else {
      setDisableImage(true);
    }
  }, [image]);

  return (
    <Container>
      <S.styledDiv>
        {user && date ? (
          <Box sx={style}>
            <S.styledBoxArea>
              <S.styledLeftbox onClick={() => setModalUpdateImage(true)}>
                <S.styledAvatar>
                  {!user.image ? (
                    <Avatar
                      sx={{
                        bgcolor: `${Cookies.get("color")}`,
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      {user.name.charAt(0)}
                    </Avatar>
                  ) : (
                    <Avatar
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                      alt={user.name}
                      src={user.image}
                    />
                  )}
                </S.styledAvatar>
              </S.styledLeftbox>

              <Box sx={subStyle}>
                <Message
                  message={`Id: ${user.id}`}
                  fontSize="2em"
                  fontFamily="Montserrat"
                  color="#ffffff"
                />
                <Message
                  message={`Nome: ${user.name}`}
                  fontSize="2em"
                  fontFamily="Montserrat"
                  color="#ffffff"
                />
                <Message
                  message={`Email: ${user.email}`}
                  fontSize="2em"
                  fontFamily="Montserrat"
                  color="#ffffff"
                />
                <Message
                  message={`Criação: ${date}`}
                  fontSize="2em"
                  fontFamily="Montserrat"
                  color="#ffffff"
                />
              </Box>
            </S.styledBoxArea>

            <ModalComponent
              open={modalUpdateImage}
              onClose={() => closeModalUpdateImage()}
            >
              <>
                <Message
                  message="Preview: "
                  fontSize="1em"
                  fontFamily="Montserrat"
                />
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                  }}
                  alt={user.name}
                  src={image}
                />
                <TextField
                  label="Link"
                  variant="outlined"
                  multiline
                  sx={{ width: "400px" }}
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></TextField>
                {loadingImage ? (
                  <B.Button
                    isLoading={true}
                    width="400px"
                    justifyContent="center"
                    backgroundColor="#fff"
                    border="0"
                    colorLoading="#000"
                  />
                ) : (
                  <Button
                    variant="outlined"
                    disabled={disableImage}
                    onClick={updateImage}
                  >
                    Trocar
                  </Button>
                )}
              </>
            </ModalComponent>
          </Box>
        ) : (
          <></>
        )}
      </S.styledDiv>
    </Container>
  );
};
