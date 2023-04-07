import styled from '@emotion/styled';
import { IStyledDiv } from './types';

export const styledInput = styled.input`
	width: 100%;
	height: 100%;
	border-radius: 5px;
	padding: 15px 10px 6px 10px;
	background-color: transparent;
	border-color: #ff0101;
	outline: none;
	transition: 0.5 ease;
	font-size: 1.2em;
	position: relative;
	transition: 0.3s ease;
	z-index: 2;
`;

export const styledDiv = styled.div<IStyledDiv>`
	width: ${({ width }) => (width ? width : '250px')};
	height: ${({ height }) => (height ? height : '35px')};
	position: relative;

	&::after {
		transition: top 0.5 ease;
		content: '${({ label }) => (label ? label : '')}';
		position: absolute;
		font-size: ${({ stateLabel }) => (stateLabel ? '0.9em' : '1.3em')};
		top: 12px;
		left: 10px;
		transition: 0.3s ease;
		color: rgba(255, 1, 1, 0.8);
		font-family: 'Montserrat', sans-serif;
		cursor: text;
		transform: translateY(
			${({ stateLabel, sizeHeight }) =>
				stateLabel ? '-6px' : `${sizeHeight}px`}
		);
	}
`;
