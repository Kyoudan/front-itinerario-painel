import styled from "@emotion/styled";
import { styledHeaderType } from "./types";

export const styledHeader = styled.header<styledHeaderType>`
  width: ${({ size }) => (size ? size : "200px")};
  height: 100vh;
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5 ease;
  justify-content: space-between;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const styledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  transition: 0.5 ease;
`;
