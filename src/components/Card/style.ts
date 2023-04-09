import styled from '@emotion/styled';
import { IStyledCard } from './types';

export const styledCard = styled.div<IStyledCard>`
	width: ${({ width }) => (width ? width : '')};
	background-color: ${({ backgroundColor }) => backgroundColor};
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: ${({ flexDirection }) =>
		flexDirection ? flexDirection : 'column'};
	border-radius: ${({ borderRadius }) => borderRadius};
	padding: ${({ padding }) => padding};
	box-shadow: -5px -5px 30px 0.2px rgba(0, 0, 0, 0.3);
	z-index: 100;
	@media (max-width: 600px) {
		${({ mediaCustom }) => mediaCustom}
	}
`;
