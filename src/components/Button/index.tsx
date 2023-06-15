import { useEffect, useState } from "react";
import * as S from "./style";
import { IProps } from "./types";
import { HashLoader } from "react-spinners";

export const Button = ({
  active,
  filter,
  message,
  width,
  height,
  margin,
  borderRadius,
  isScale,
  isLoading,
  background,
  backgroundColor,
  border,
  hover,
  backgroundHover,
  justifyContent,
  mediaCustom,
  color,
  boxShadow,
  boxShadowHover,
  fontSize,
  colorLoading,
  sizeLoading,
  borderHover,
  onMouseEnter,
  onMouseLeave,
  onMouseHover,
  onMouseDown,
  Icon,
  onClick,
}: IProps) => {
  if (active == false) {
    onClick = undefined;
    backgroundColor = "#fff";
    color = "#ccc";
    border = "1px solid #ccc";
    filter = "grayscale(100%)";
  }
  return (
    <>
      <S.styledButton
        width={width}
        height={height}
        margin={margin}
        borderRadius={borderRadius}
        isScale={isScale}
        background={background}
        backgroundColor={backgroundColor}
        border={border}
        hover={hover}
        backgroundHover={backgroundHover}
        justifyContent={justifyContent}
        mediaCustom={mediaCustom}
        color={color}
        boxShadow={boxShadow}
        boxShadowHover={boxShadowHover}
        fontSize={fontSize}
        onClick={onClick}
        onMouseOver={onMouseHover}
        onMouseDown={onMouseDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        filter={filter}
        borderHover={borderHover}
      >
        {isLoading ? (
          <HashLoader
            color={colorLoading ? colorLoading : "#fff"}
            size={sizeLoading ? sizeLoading : 30}
          />
        ) : (
          <>
            {Icon && <Icon />} {message}
          </>
        )}
      </S.styledButton>
    </>
  );
};
