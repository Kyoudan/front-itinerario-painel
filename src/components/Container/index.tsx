import { ReactNode, useEffect, useState, useContext } from "react";
import { SideBar } from "../SideBar";
import * as S from "./style";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

interface IProps {
  children?: ReactNode;
  image?: string;
}

export const Container = ({ children, image }: IProps) => {
  const [cellphone, setCellphone] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const { setCellphoneContext, setHeight } = useContext(AuthContext);

  const VerifyPlataform = () => {
    if (width < 600) {
      setCellphone(true);
      setCellphoneContext?.(true);
    } else {
      setCellphone(false);
      setCellphoneContext?.(false);
    }
  };

  useEffect(() => {
    VerifyPlataform();
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      VerifyPlataform();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <S.styledDiv cellphone={cellphone}>
      <SideBar cellphone={cellphone} image={image}/>
      {children}
    </S.styledDiv>
  );
};
