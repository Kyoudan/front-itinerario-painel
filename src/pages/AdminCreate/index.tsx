import { Container } from "../../components/Container";
import { Header } from "../Admin/Header";
import { useNavigate } from "react-router";
import * as S from "./style";
import { useEffect, useState, ChangeEvent } from "react";
import { Message } from "../../components/Message";
import { Box, Button, TextField, Alert } from "@mui/material";
import { ModalComponent } from "../../components/Modal";
import * as B from "../../components/Button";
import { api } from "../../api/api";
import Cookies from "js-cookie";

export const AdminCreate = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [modalPassword, setModalPassword] = useState(true);
  const [disableButtonPassword, setDisableButtonPassword] =
    useState<boolean>(true);
  const [disabledCreateAdmin, setDisabledCreateAdmin] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (password) {
      setDisableButtonPassword(false);
    } else {
      setDisableButtonPassword(true);
    }
  }, [password]);

  useEffect(() => {
    if (!name) {
      setDisabledCreateAdmin(true);
      setError('Campo "nome" vazio!!');
    } else if (!email) {
      setDisabledCreateAdmin(true);
      setError('Campo "email" vazio!!');
    } else if (!userPassword) {
      setDisabledCreateAdmin(true);
      setError('Campo "senha" vazio!!');
    } else if (!confirmPassword) {
      setDisabledCreateAdmin(true);
      setError('Campo "confime a senha" vazio!!');
    } else if (confirmPassword != userPassword) {
      setDisabledCreateAdmin(true);
      setError("As senhas não conferem");
    } else {
      setDisabledCreateAdmin(false);
      setError("");
    }
  }, [name, email, userPassword, confirmPassword]);

  const cancelEnterPassword = () => {
    navigate("/admin");
  };

  const enterPassword = () => {
    if (password == "123") {
      setModalPassword(false);
    }
  };

  const createAdmin = async () => {
    try {
      setLoading(true);
      await api.post(
        "/admin",
        {
          name,
          password: userPassword,
          email,
        },
        {
          headers: {
            Authorization: `${Cookies.get("token")}`,
          },
        }
      );
      navigate("/admin");
    } catch (err: any) {
      console.log(err);
      setLoading(false);
      setError(`${err.response} - Status: ${err.status}`);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const style = {
    width: 500,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    borderRadius: "10px",
  };

  return (
    <Container>
      <S.styledDiv>
        <Header navigate={useNavigate()} />
        <ModalComponent open={modalPassword}>
          <>
            <Message
              fontFamily="Montserrat"
              fontSize="2em"
              message="Digite a senha para prosseguir"
            />
            <TextField
              variant="outlined"
              label="Senha"
              style={{ width: "400px" }}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <Button
              variant="contained"
              style={{ width: "400px" }}
              disabled={disableButtonPassword}
              onClick={enterPassword}
            >
              Prosseguir
            </Button>
            <B.Button
              message="Cancelar"
              color="#666666"
              width="75px"
              justifyContent="Center"
              border="0"
              fontSize="0.9em"
              backgroundColor="#fff"
              height="20px"
              onClick={cancelEnterPassword}
            />
          </>
        </ModalComponent>

        {!modalPassword ? (
          <S.styledCard>
            <Box sx={style}>
              <Message
                fontFamily="Montserrat"
                fontSize="2em"
                message="Cadastro de admin"
                margin="auto"
              />

              <TextField
                variant="outlined"
                label="Nome"
                style={{ width: "500px" }}
                onChange={(e) => setName(e.target.value)}
              ></TextField>

              <TextField
                variant="outlined"
                label="Email"
                style={{ width: "500px" }}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>

              <TextField
                variant="outlined"
                label="Senha"
                style={{ width: "500px" }}
                type="password"
                onChange={(e) => setUserPassword(e.target.value)}
              ></TextField>

              <TextField
                variant="outlined"
                label="Confirme a senha"
                style={{ width: "500px" }}
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></TextField>

              {error && <Alert severity="error">{error}</Alert>}

              {!loading ? (
                <Button
                  variant="outlined"
                  style={{ width: "500px" }}
                  disabled={disabledCreateAdmin}
                  onClick={createAdmin}
                >
                  Criar
                </Button>
              ) : (
                <B.Button
                  isLoading={true}
                  colorLoading="#000"
                  justifyContent="center"
                  width="500px"
                  border="0"
                />
              )}
            </Box>
          </S.styledCard>
        ) : (
          <></>
        )}
      </S.styledDiv>
    </Container>
  );
};
