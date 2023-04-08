import styled from '@emotion/styled';
import { IStyledButton } from './types';

export const styledButton = styled.button<IStyledButton>`
	width: ${({ width }) => (width ? width : '430px')};
	height: ${({ height }) => (height ? height : '45px')};
	margin: ${({ margin }) => (margin ? margin : '0px')};
	border-radius: ${({ borderRadius }) =>
		borderRadius ? borderRadius : '5px'};
	border-color: #ff0101;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(35deg, #fc6262, #fc2828, #ff0101, #fc6262);
	cursor: pointer;
	transition: 0.5s ease;
	color: #fff;
	font-size: 1.3em;
	font-family: 'Montserrat', sans-serif;
	position: relative;
	&:hover {
		transition: 0.5s ease;
		${({ isScale }) => (isScale ? 'transform: scale(1.02);' : '')}
	}
`;
