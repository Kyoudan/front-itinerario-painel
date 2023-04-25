import styled from "@emotion/styled";

export const styledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  padding: 20px 0px;
  background-color: #1c1c1c;
  justify-content: space-between;

  .classdiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  }

  .right {
    justify-content: end;
    column-gap: 10px;
    padding-right: 20px;
  }
`;

export const styledCheckAnimation = styled.div`
  .css-176fz6q {
    width: 22px;
  }
  svg {
    width: 22px;
    border: 2px solid #fff;
    border-radius: 5px;
    padding: 10px 12px;
    cursor: pointer;
    transition: 0.5s ease;

    &:hover {
      transition: 0.5s ease;
      background-color: #494949;
    }
  }
`;
