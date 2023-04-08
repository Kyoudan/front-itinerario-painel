import { IProps } from './types';
import * as S from './style';

export const Card = ({
	children,
	borderRadius,
	padding,
	backgroundColor,
}: IProps) => {
	return (
		<S.styledCard
			borderRadius={borderRadius}
			padding={padding}
			backgroundColor={backgroundColor}>
			{children}
		</S.styledCard>
	);
};
