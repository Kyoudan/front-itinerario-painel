import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IProps {
  children?: ReactNode;
}

export interface DecodeType {
  id?: number;
  name?: string;
  email?: string;
  iat?: number;
  exp?: number;
}

export interface IUserContext {
  cellphone?: boolean;
  setCellphoneContext?: Dispatch<SetStateAction<boolean>>;
  user: {
    id?: number;
    name?: string;
    email?: string;
    iat?: number;
    exp?: number;
  };
  setUser: Dispatch<
    SetStateAction<{
      id?: number;
      name?: string;
      email?: string;
      iat?: number;
      exp?: number;
    }>
  >;
  setHeight: Dispatch<SetStateAction<number>>;
  VerifyToken: () => Promise<void>;
  height?: number;
}
