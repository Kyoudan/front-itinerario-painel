import * as S from './style';
import { IProps } from './types';
import { HashLoader } from 'react-spinners';

export const Button = ({
	message,
	width,
	height,
	margin,
	borderRadius,
	isScale,
	isLoading,
	onClick,
}: IProps) => {
	return (
		<S.styledButton
			width={width}
			height={height}
			margin={margin}
			borderRadius={borderRadius}
			isScale={isScale}
			onClick={onClick}>
			{isLoading ? (
				<HashLoader
					color="#fff"
					size={30}
				/>
			) : (
				message
			)}
		</S.styledButton>
	);
};
