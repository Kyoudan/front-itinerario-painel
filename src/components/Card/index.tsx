import { IProps } from "./types";
import * as S from "./style";

export const Card = ({
  children,
  borderRadius,
  padding,
  backgroundColor,
  mediaCustom,
  flexDirection,
  width,
}: IProps) => {
  return (
    <S.styledCard
      borderRadius={borderRadius}
      padding={padding}
      backgroundColor={backgroundColor}
      mediaCustom={mediaCustom}
      flexDirection={flexDirection}
      width={width}
    >
      {children}
    </S.styledCard>
  );
};
