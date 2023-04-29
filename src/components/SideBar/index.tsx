import * as S from "./style";
import { Links } from "./Links";
import { useNavigate } from "react-router";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { BsList } from "react-icons/bs";
import Cookies from "js-cookie";
import { IProps } from "./types";
import jwtDecode from "jwt-decode";
import { Avatar } from "@mui/material";
import { Message } from "../Message";

interface IUser {
  id: number;
  name: string;
}

export const SideBar = (isCellphone: IProps) => {
  const [sizeButton, setSizeButton] = useState("60px");
  const [justifyContent, setJustifyContent] = useState("center");
  const [message, setMessage] = useState(false);
  const [arrow, setArrow] = useState("AiOutlineArrowRight");
  const [animationWidth, setAnimationWidth] = useState("");
  const [activateCellphone, setActivateCellphone] = useState(false);
  const [user, setUser] = useState<IUser>();
  const [color, setColor] = useState<string>();
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

  const navigateToProfile = () => {
    navigate("/profile");
  };

  const ButtonDices = Links(useNavigate(), justifyContent, sizeButton, message);

  useEffect(() => {
    const token = Cookies.get("token");
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
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    if (token) {
      setUser(jwtDecode(token));
    }
  }, []);

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
          <>
            {user && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    display: "flex",
                    flexDirection: "row",
                    cursor: "pointer",
                    alignItems: "center",
                    columnGap: "10px",
                    marginLeft: "14px",
                  }}
                  onClick={navigateToProfile}
                >
                  <Avatar
                    sx={{ bgcolor: color, width: "20px", height: "50px" }}
                  >
                    {user.name.charAt(0)}
                  </Avatar>
                  {message && (
                    <Message
                      message={user.name}
                      fontSize="1.3em"
                      fontFamily="Montserrat"
                      color="#fff"
                    />
                  )}
                </div>
              </div>
            )}

            <Button
              Icon={() => <ImExit />}
              width={sizeButton}
              message={message ? "Logout" : ""}
              backgroundColor="#1c1c1c"
              backgroundHover="#494949"
              border="none"
              margin="0px 0px 20px 0px"
              onClick={Exit}
              justifyContent="center"
            />
          </>
        ) : (
          ""
        )}
      </div>
    </S.styledHeader>
  );
};
