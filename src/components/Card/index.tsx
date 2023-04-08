import { IProps } from './types';
import * as S from './style';

export const Card = ({
	children,
	borderRadius,
	padding,
	backgroundColor,
	mediaCustom,
}: IProps) => {
	return (
		<S.styledCard
			borderRadius={borderRadius}
			padding={padding}
			backgroundColor={backgroundColor}
			mediaCustom={mediaCustom}>
			{children}
		</S.styledCard>
	);
};
