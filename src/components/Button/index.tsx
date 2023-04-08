import * as S from "./style";
import { IProps } from "./types";
import { HashLoader } from "react-spinners";

export const Button = ({
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
  Icon,
  onClick,
}: IProps) => {
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
        onClick={onClick}
      >
        {isLoading ? (
          <HashLoader color="#fff" size={30} />
        ) : (
          <>
            {Icon && <Icon />} {message}
          </>
        )}
      </S.styledButton>
    </>
  );
};
