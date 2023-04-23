import * as S from "./style";
import { Links } from "./Links";
import { useNavigate } from "react-router";
import { Button } from "../Button";
import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { BsList } from "react-icons/bs";
import Cookies from "js-cookie";
import { IProps } from "./types";

export const SideBar = (isCellphone: IProps) => {
  const [sizeButton, setSizeButton] = useState("60px");
  const [justifyContent, setJustifyContent] = useState("center");
  const [message, setMessage] = useState(false);
  const [arrow, setArrow] = useState("AiOutlineArrowRight");
  const [animationWidth, setAnimationWidth] = useState("");
  const [activateCellphone, setActivateCellphone] = useState(false);
  const navigate = useNavigate();

  const handleSizeSideBar = () => {
    sizeButton == "60px" ? setSizeButton("180px") : setSizeButton("60px");
    justifyContent == "center"
      ? setJustifyContent("flex-start")
      : setJustifyContent("center");
    message == false ? setMessage(true) : setMessage(false);
    arrow == "AiOutlineArrowLeft"
      ? setArrow("AiOutlineArrowRight")
      : setArrow("AiOutlineArrowLeft");
    animationWidth == "animateWidth-in"
      ? setAnimationWidth("animateWidth-out")
      : setAnimationWidth("animateWidth-in");
    activateCellphone
      ? setActivateCellphone(false)
      : setActivateCellphone(true);
  };

  const Exit = () => {
    Cookies.remove("token");
    navigate("/");
  };

  const ButtonDices = Links(useNavigate(), justifyContent, sizeButton, message);

  return (
    <S.styledHeader animationWidth={animationWidth}>
      <div>
        {isCellphone.cellphone
          ? ButtonDices.map((item) => (
              <S.styledDiv key={item.name}>{item.button}</S.styledDiv>
            ))
          : ""}
        {!isCellphone.cellphone ? (
          <Button
            margin="20px 0px 0px 0px"
            width={sizeButton}
            backgroundColor="#1c1c1c"
            backgroundHover="#494949"
            border="1px solid #484848"
            onClick={handleSizeSideBar}
            justifyContent="center"
            Icon={() =>
              arrow == "AiOutlineArrowLeft" ? (
                <AiOutlineArrowRight />
              ) : (
                <AiOutlineArrowLeft />
              )
            }
          />
        ) : (
          <Button
            margin="20px 0px 0px 0px"
            width="60px"
            backgroundColor="#1c1c1c"
            backgroundHover="#494949"
            border="1px solid #484848"
            onClick={handleSizeSideBar}
            justifyContent="center"
            Icon={() => <BsList />}
          />
        )}
        {!isCellphone.cellphone
          ? ButtonDices.map((item) => (
              <S.styledDiv key={item.name}>{item.button}</S.styledDiv>
            ))
          : ""}
      </div>
      <div>
        {!isCellphone.cellphone ? (
          <Button
            Icon={() => <ImExit />}
            width={sizeButton}
            backgroundColor="#1c1c1c"
            backgroundHover="#494949"
            border="none"
            margin="0px 0px 20px 0px"
            onClick={Exit}
            justifyContent="center"
          />
        ) : (
          ""
        )}
      </div>
    </S.styledHeader>
  );
};
