import styled from "@emotion/styled";
import { IStyledTextArea } from "./types";

export const styledDiv = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

export const styledTitle = styled.h1`
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
  text-transform: capitalize;
  text-align: center;
`;

export const styledDescription = styled.p`
  font-size: 1.2em;
  font-family: "Ubuntu", sans-serif;
  text-transform: capitalize;
  margin-bottom: 2em;
`;

export const styledTextArea = styled.p<IStyledTextArea>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}em` : "0")};
  font-family: "Ubuntu", sans-serif;
  text-align: justify;
  text-transform: capitalize;
`;

export const styledImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
`;
