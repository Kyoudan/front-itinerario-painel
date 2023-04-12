import styled from "@emotion/styled";
import { IStyledMessage } from "./types";

export const styledMessage = styled.div<IStyledMessage>`
  width: 250px;
  height: 80px;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  transition: 0.5 ease;
  position: absolute;
  bottom: 10px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
  animation: ${({ animate }) =>
    animate
      ? animate == "animate-in"
        ? "animate-in .5s ease forwards"
        : animate == "animate-out" && "animate-out .5s ease forwards"
      : ""};

  h1 {
    color: ${({ fontColor }) => (fontColor ? fontColor : "#fff")};
    font-size: 1.5em;
    font-family: "Bebas Neue", cursive;
  }

  p {
    font-size: 1.1em;
    font-family: "Montserrat", sans-serif;
    color: ${({ fontColor }) => (fontColor ? fontColor : "#fff")};
  }

  @keyframes animate-in {
    0% {
      opacity: 0;
      transform: translateX(-10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes animate-out {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(10px);
    }
  }
`;
