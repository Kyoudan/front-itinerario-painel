import { createContext, useState } from "react";
import { DecodeType, IProps, IUserContext } from "./types";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
export const AuthContext = createContext<IUserContext>({
  user: {},
  setUser: () => {},
  VerifyToken: () => Promise.resolve(),
});

export const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState({});

  const VerifyToken = async () => {
    try {
      const token = Cookies.get("token");
      if (token) {
        const decode = await jwtDecode<DecodeType>(token);
        if (decode) {
          return setUser(decode);
        }
      }
    } catch {}
  };

  return (
    <AuthContext.Provider value={{ user, setUser, VerifyToken }}>
      {children}
    </AuthContext.Provider>
  );
};
