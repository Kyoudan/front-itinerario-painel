import * as S from "./style";
import { Links } from "./Links";
import { useNavigate } from "react-router";
import { Button } from "../Button";
import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import Cookies from "js-cookie";

export const SideBar = () => {
  const [size, setSize] = useState("80px");
  const [sizeButton, setSizeButton] = useState("60px");
  const [justifyContent, setJustifyContent] = useState("center");
  const [message, setMessage] = useState(false);
  const [arrow, setArrow] = useState("AiOutlineArrowRight");

  const handleSizeSideBar = () => {
    size == "80px" ? setSize("200px") : setSize("80px");
    sizeButton == "60px" ? setSizeButton("180px") : setSizeButton("60px");
    justifyContent == "center"
      ? setJustifyContent("flex-start")
      : setJustifyContent("center");
    message == false ? setMessage(true) : setMessage(false);
    arrow == "AiOutlineArrowLeft"
      ? setArrow("AiOutlineArrowRight")
      : setArrow("AiOutlineArrowLeft");
  };

  const navigate = useNavigate();

  const Exit = () => {
    Cookies.remove("token");
    navigate("/");
  };

  const ButtonDices = Links(useNavigate(), justifyContent, sizeButton, message);

  return (
    <S.styledHeader size={size}>
      <div>
        <Button
          margin="20px 0px 0px 0px"
          width={sizeButton}
          backgroundColor="#1c1c1c"
          backgroundHover="#494949"
          border="1px solid #484848"
          onClick={handleSizeSideBar}
          Icon={() =>
            arrow == "AiOutlineArrowLeft" ? (
              <AiOutlineArrowRight />
            ) : (
              <AiOutlineArrowLeft />
            )
          }
          justifyContent="center"
        />
        {ButtonDices.map((item) => (
          <S.styledDiv key={item.name}>{item.button}</S.styledDiv>
        ))}
      </div>
      <div>
        <Button
          Icon={() => <ImExit />}
          width={sizeButton}
          backgroundColor="#1c1c1c"
          backgroundHover="#494949"
          border="none"
          margin="0px 0px 20px 0px"
          onClick={Exit}
        />
      </div>
    </S.styledHeader>
  );
};
