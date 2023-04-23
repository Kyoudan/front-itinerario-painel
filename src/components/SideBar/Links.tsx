import { AiFillHome } from "react-icons/ai";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { Button } from "../Button";
import { MouseEventHandler } from "react";
import { NavigateFunction } from "react-router";
import { TbHash } from "react-icons/tb";
import { IoPersonCircle } from "react-icons/io5";

export const Links = (
  navigate: NavigateFunction,
  justify: string,
  width: string,
  message: boolean
) => {
  const handleClick = (path: string): MouseEventHandler => {
    return (event) => {
      navigate(path);
    };
  };
  return [
    {
      name: "Home",
      button: (
        <Button
          message={message ? "Home" : ""}
          width={width}
          backgroundColor="#1c1c1c"
          border="none"
          backgroundHover="#494949"
          Icon={() => <AiFillHome />}
          onClick={handleClick("/painel")}
          justifyContent={justify}
        />
      ),
    },
    {
      name: "Postagens",
      button: (
        <Button
          message={message ? "Postagens" : ""}
          width={width}
          backgroundColor="#1c1c1c"
          border="none"
          backgroundHover="#494949"
          Icon={() => <BsFillFileEarmarkPostFill />}
          onClick={handleClick("/postagens")}
          justifyContent={justify}
        />
      ),
    },
    {
      name: "Tags",
      button: (
        <Button
          message={message ? "Tags" : ""}
          width={width}
          backgroundColor="#1c1c1c"
          border="none"
          backgroundHover="#494949"
          Icon={() => <TbHash />}
          onClick={handleClick("/tags")}
          justifyContent={justify}
        />
      ),
    },
    {
      name: "Perfil",
      button: (
        <Button
          message={message ? "Perfil" : ""}
          width={width}
          backgroundColor="#1c1c1c"
          border="none"
          backgroundHover="#494949"
          Icon={() => <IoPersonCircle />}
          onClick={handleClick("/profile")}
          justifyContent={justify}
        />
      ),
    },
  ];
};
