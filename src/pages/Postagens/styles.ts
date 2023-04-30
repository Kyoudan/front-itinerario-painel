import styled from "@emotion/styled";
import { IStyledLoading } from "./types";

export const styledDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const styledPostDiv = styled.div`
  margin-top: 10px;
  width: 90%;
  min-height: 60px;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 20px 0.1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s ease;
  p {
    color: #000;
  }

  &:hover {
    transition: 0.5s ease;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 20px 0.1px rgba(0, 0, 0, 0.5);
  }
`;

export const styledPostTitle = styled.h1`
  font-size: 1.5em;
  font-family: Montserrat, sans-serif;
  color: #ff0101;
`;

export const styledPostText = styled.p`
  font-size: 1em;
  font-family: Montserrat, sans-serif;
  color: #000;
`;

export const styledContainerPost = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const styledLoading = styled.div<IStyledLoading>`
  width: 100%;
  height: 100%;
  ${({ cellphone }) => (cellphone ? "height: 500px" : "")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const styledDivPosts = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const styledDivPostsArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #000;
  padding-left: 10px;
  padding-right: 10px;
`;
