import * as S from "./style";
import { IProps } from "./types";

export const ViewPosts = ({ textTitle, textDescription, text }: IProps) => {
  text.map((t) => console.log(t));

  return (
    <S.styledDiv>
      <S.styledTitle>{textTitle}</S.styledTitle>
      <S.styledDescription>{textDescription}</S.styledDescription>
      {text.map((item) =>
        item ? (
          item.type == "text" ? (
            <S.styledTextArea fontSize={item.size}>
              {item.text}
            </S.styledTextArea>
          ) : (
            <S.styledImage src={item.text}></S.styledImage>
          )
        ) : (
          <></>
        )
      )}
    </S.styledDiv>
  );
};
