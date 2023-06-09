import styled from "@emotion/styled";
import { IStyledButton } from "./types";

export const styledButton = styled.button<IStyledButton>`
  width: ${({ width }) => (width ? width : "430px")};
  height: ${({ height }) => (height ? height : "45px")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  border: ${({ border }) => (border ? border : "")};
  filter: ${({ filter }) => (filter ? filter : "")};
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  background: ${({ background, backgroundColor }) =>
    background && !backgroundColor ? background : ""};
  background-color: ${({ background, backgroundColor }) =>
    !background && backgroundColor ? backgroundColor : ""};
  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : "")};
  cursor: pointer;
  transition: 0.5s ease;
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.3em")};
  font-family: "Montserrat", sans-serif;
  position: relative;
  &:hover {
    transition: 0.5s ease;
    ${({ isScale }) => (isScale ? "transform: scale(1.02);" : "")}
    ${({ backgroundHover }) =>
      backgroundHover ? `background-color: ${backgroundHover};` : ""}
		box-shadow: ${({ boxShadowHover }) => (boxShadowHover ? boxShadowHover : "")};
    border: ${({ borderHover }) => (borderHover ? borderHover : "")};
  }

  @media (max-width: 600px) {
    ${({ mediaCustom }) => mediaCustom}
  }

  svg {
    color: "red";
  }
`;
