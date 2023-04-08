import { IProps } from './types';
import * as S from './style';

export const Message = ({
	message,
	fontSize,
	toUpper,
	margin,
	border,
	borderColor,
	color,
	borderBottom,
	borderLeft,
	borderRight,
	borderTop,
	padding,
	fontFamily
}: IProps) => {
	return (
		<S.styledMessage
			fontSize={fontSize}
			toUpper={toUpper}
			margin={margin}
			border={border}
			borderColor={borderColor}
			borderBottom={borderBottom}
			borderLeft={borderLeft}
			borderRight={borderRight}
			borderTop={borderTop}
			padding={padding}
			color={color}
			fontFamily={fontFamily}>
			{message}
		</S.styledMessage>
	);
};
