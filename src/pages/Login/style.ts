import styled from "@emotion/styled";
import { IDivStyled } from "./types";

export const styledDiv = styled.div<IDivStyled>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    width: 2050px;
    height: 1110px;
    left: 0px;
  }
`;
