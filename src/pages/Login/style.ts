import styled from "@emotion/styled";
import { IDivStyled } from "./types";

export const styledDiv = styled.div<IDivStyled>`
  background-color: ${({ teste }) => (teste ? teste : "red")};
`;
