import * as S from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Message } from "../../components/Message";
import { Card } from "../../components/Card";
import Fundo from "../../assets/Painel.jpg";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import jwtDecode from "jwt-decode";
import { MessageBalloon } from "../../hooks/Message";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const userContext = useContext(AuthContext);
  const { element, handleClick } = MessageBalloon();

  const navigation = useNavigate();

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    if (event) {
      setEmail(event.target.value);
    }
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    if (event) {
      setPassword(event.target.value);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await api.post("/loginadmin", {
        email,
        password,
      });
      setLoading(false);
      Cookies.set("token", result.data, {
        sameSite: "strict",
        expires: 1,
      });
      const colors = [
        "#FF4136",
        "#2ECC40",
        "#0074D9",
        "#FFDC00",
        "#FF851B",
        "#B10DC9",
        "#7FDBFF",
        "#001f3f",
      ];
      Cookies.set("color", colors[Math.floor(Math.random() * colors.length)], {
        sameSite: "strict",
        expires: 1,
      });
      const decode = await jwtDecode(result.data);
      if (decode) {
        console.log(decode);
        userContext.setUser(decode);
        return navigation("/painel");
      }
      navigation("/");
    } catch (err: any) {
      setLoading(false);
      if (err.response) {
        handleClick({
          message: err.response.data.message,
          variation: "error",
        });
      } else {
        handleClick({ message: "Erro inesperado!!", variation: "error" });
      }
    }
  };

  const handleVerifyToken = async () => {
    const token = Cookies.get("token");
    if (token) {
      try {
        await api.post("/verifytokenadm", {
          token,
        });
        navigation("/painel");
      } catch {
        Cookies.remove("token");
      }
    }
  };

  useEffect(() => {
    handleVerifyToken();
  }, []);

  return (
    <S.styledDiv>
      {element}
      <img src={Fundo} />
      <Card
        borderRadius="30px"
        backgroundColor="#fff"
        padding="50px 30px 50px 0px"
        mediaCustom="padding: 20px 30px 20px 0px;"
      >
        <Message
          message="Painel"
          toUpper={false}
          fontSize="3em"
          margin="10px 0px"
        />
        <Input
          label="Email"
          width="400px"
          height="55px"
          sizeHeight="55"
          borderRadius="10px"
          mediaCustom="width: 300px;"
          onText={handleEmail}
        />

        <Input
          label="Password"
          width="400px"
          height="55px"
          sizeHeight="55"
          borderRadius="10px"
          onText={handlePassword}
          mediaCustom="width: 300px;"
          isHide={true}
        />

        <Button
          message="Logar"
          margin="10px 0px 0px 20px"
          borderRadius="20px"
          isLoading={loading}
          onClick={handleLogin}
          background="linear-gradient(35deg, #fc6262, #fc2828, #ff0101, #fc6262)"
          border="1px solid #ff0101"
          justifyContent="center"
          mediaCustom="width: 300px"
        />
      </Card>
    </S.styledDiv>
  );
};
