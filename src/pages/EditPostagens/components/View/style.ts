import styled from "@emotion/styled";
import { IStyledTextArea } from "./types";

export const styledDiv = styled.div`
  width: 850px;
  height: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;

  @media (max-width: 1150px) {
    width: 700px;
  }
  @media (max-width: 900px) {
    width: 550px;
  }
  @media (max-width: 700px) {
    width: 400px;
  }
  @media (max-width: 600px) {
    width: 500px;
  }
  @media (max-width: 570px) {
    width: 90%;
  }
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
  max-width: 850px;
  max-height: 300px;
  border-radius: 10px;
  background-position: center;
  background-attachment: scroll;

  @media (max-width: 900px) {
    max-width: 550px;
  }
  @media (max-width: 700px) {
    max-width: 400px;
  }
  @media (max-width: 570px) {
    max-width: 90%;
  }
`;
