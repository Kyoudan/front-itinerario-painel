import styled from "@emotion/styled";

export const styledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
`;

export const styledBoxArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const styledLeftbox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const styledAvatar = styled.div`
  width: 300px;
  height: 300px;
  transition: 0.5s ease;

  div {
    position: relative;
    transition: 0.5s ease;
    cursor: pointer;
  }

  div::before {
    content: "";
    position: absolute;
    transition: 0.5s ease;
    z-index: 0;
  }

  div::after {
    content: "";
    position: absolute;
    top: 130px;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5em;
    text-align: center;
    z-index: 10;
    transition: 0.5s ease;
    opacity: 0;
    color: "#fff";
  }

  div:hover::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    transition: 0.5s ease;
    z-index: 0;
  }

  div:hover::after {
    content: "Trocar foto de perfil!!";
    position: absolute;
    top: 130px;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5em;
    text-align: center;
    z-index: 10;
    transition: 0.5s ease;
    opacity: 1;
    color: "#fff";
  }
`;
