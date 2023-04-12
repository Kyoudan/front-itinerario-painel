import { useEffect, useState } from "react";
import * as S from "./style";

export const MessageBalloon = () => {
  const [message, setMessage] = useState<string>();
  const [visible, setVisible] = useState<boolean>();
  const [type, setType] = useState<string>();
  const [color, setColor] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [fontColor, setFontColor] = useState<string>();
  const [animate, setAnimate] = useState<string>();

  useEffect(() => {
    if (type == "success") {
      setColor("#6eff88");
      setFontColor("#000");
    } else if (type == "warning") {
      setColor("#fff703");
      setFontColor("#000");
    } else {
      setColor("#ff4053");
      setFontColor("#000");
    }
  }, [type]);

  useEffect(() => {
    setAnimate("animate-in");
    setTimeout(() => {
      setAnimate("animate-out");
      setTimeout(() => {
        setVisible(false);
      }, 1000);
    }, 5000);
  }, [visible]);

  const handleVisible = () => {
    setAnimate("animate-out");
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  return {
    visible: visible,
    setVisible: setVisible,
    setTitle: setTitle,
    setMessage: setMessage,
    setType: setType,
    element: (
      <S.styledMessage
        color={color}
        fontColor={fontColor}
        animate={animate}
        onClick={handleVisible}
      >
        <h1>{title}</h1>
        <p>{message}</p>
      </S.styledMessage>
    ),
  };
};
