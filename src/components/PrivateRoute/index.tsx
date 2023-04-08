import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router";
import { api } from "../../api/api";
import { useEffect, useState } from "react";

interface IProps {
  children: JSX.Element;
}

interface IResponse {
  data: boolean;
}

export const PrivateRoute = ({ children }: IProps) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState<IResponse>();

  const handleAuth = async () => {
    const token = Cookies.get("token");
    try {
      const verifyResponse: IResponse = await api.post("/verifytokenadm", {
        token: token,
      });
      setIsAuth(verifyResponse);
      if (!verifyResponse.data) navigate("/");
    } catch (error) {
      navigate("/");
    }
  };

  useEffect(() => {
    handleAuth();
  }, []);

  return isAuth ? children : <></>;
};
