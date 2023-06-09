import { createContext, useState } from "react";
import { DecodeType, IProps, IUserContext } from "./types";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
export const AuthContext = createContext<IUserContext>({
  user: {},
  setUser: () => {},
  setHeight: () => {},
  VerifyToken: () => Promise.resolve(),
});

export const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState({});
  const [cellphone, setCellphoneContext] = useState(false);
  const [height, setHeight] = useState<number>(0);

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
    <AuthContext.Provider
      value={{
        user,
        setUser,
        VerifyToken,
        setCellphoneContext,
        cellphone,
        setHeight,
        height,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
