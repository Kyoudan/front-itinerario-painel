import * as S from "./style";
import { Links } from "./Links";
import { useNavigate } from "react-router";
import { Button } from "../Button";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
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
  image: string;
  email: string;
  iat: number;
  exp: number;
}

export const SideBar = ({ cellphone, image }: IProps) => {
  const [sizeButton, setSizeButton] = useState("60px");
  const [justifyContent, setJustifyContent] = useState("center");
  const [message, setMessage] = useState(false);
  const [arrow, setArrow] = useState("AiOutlineArrowRight");
  const [animationWidth, setAnimationWidth] = useState("");
  const [activateCellphone, setActivateCellphone] = useState(false);
  const [user, setUser] = useState<IUser>();
  const [color, setColor] = useState<string>();
  const [reloadImage, setReloadImage] = useState<string>();
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
    const color = Cookies.get("color");
    const reloadImage = Cookies.get("reloadImageProfile");
    if (token) {
      setUser(jwtDecode(token));
    }
    if (color) {
      setColor(color);
    }
    if (reloadImage) {
      setReloadImage(reloadImage);
    }
  }, []);

  useEffect(() => {
    if (image && typeof image === "string") {
      setUser((prevState) => {
        if (prevState) {
          return {
            name: prevState.name,
            id: prevState.id,
            email: prevState.email,
            exp: prevState.exp,
            iat: prevState.iat,
            image: image,
          };
        }
        return;
      });
    }
  }, [image]);

  return (
    <S.styledHeader animationWidth={animationWidth}>
      <div>
        {cellphone
          ? ButtonDices.map((item) => (
              <S.styledDiv key={item.name}>{item.button}</S.styledDiv>
            ))
          : ""}
        {!cellphone ? (
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
        {!cellphone
          ? ButtonDices.map((item) => (
              <S.styledDiv key={item.name}>{item.button}</S.styledDiv>
            ))
          : ""}
      </div>
      <div>
        {!cellphone ? (
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
                >
                  {!user.image ? (
                    <Avatar
                      sx={{ bgcolor: color, width: "20px", height: "50px" }}
                      onClick={navigateToProfile}
                    >
                      {user.name.charAt(0)}{" "}
                    </Avatar>
                  ) : (
                    <Avatar
                      sx={{
                        width: "20px",
                        height: "50px",
                      }}
                      alt={user.name}
                      src={reloadImage ? reloadImage : user.image}
                      onClick={navigateToProfile}
                    />
                  )}

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
