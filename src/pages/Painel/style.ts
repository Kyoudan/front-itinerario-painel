import styled from "@emotion/styled";

export const styleDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: relative;
  align-items: center;
  justify-content: center;

  video {
    width: 100%;
    height: 100%;
    position: fixed;
    object-fit: cover;
    z-index: 2;
    opacity: 0.5;
  }

  @media (max-width: 693px) {
    h1 {
      font-size: 1.3em;
      text-align: center;
    }
  }
`;

export const styledTitle = styled.h1`
  font-family: "Notable", sans-serif;
  font-size: 2em;
  color: #fff;
  font-weight: 800;
`;

export const styledCard = styled.div`
  position: absolute;
  left: 35%;
  top: 45%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (max-width: 978px) {
    left: 22%;
  }

  @media (max-width: 780px) {
    left: 10%;
  }

  @media (max-width: 693px) {
    left: 5%;
  }
`;
