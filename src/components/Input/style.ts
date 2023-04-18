import styled from '@emotion/styled';
import { IStyledDiv, IStyledInput } from './types';

export const styledInput = styled.input<IStyledInput>`
	width: 100%;
	height: ${({ height }) => (height ? height : '100%')};
	border-radius: ${({ borderRadius }) =>
		borderRadius ? borderRadius : '5px'};
	background-color: transparent;
	padding: 0px 10px;
	padding-top: 2px;
	border: ${({ border }) => (border ? border : '1px solid #ff0101;')};
	color: ${({ color }) => (color ? color : '#000')};
	outline: none;
	transition: 0.5 ease;
	font-size: 1.2em;
	position: relative;
	transition: 0.3s ease;
	z-index: 2;

	@media (max-width: 600px) {
		${({ mediaCustom }) => mediaCustom}
	}
`;

export const styledDiv = styled.div<IStyledDiv>`
	width: ${({ width }) => (width ? width : '250px')};
	height: ${({ height }) => (height ? height : '35px')};
	position: relative;
	margin: ${({ margin }) => (margin ? margin : '10px')};

	&::after {
		transition: top 0.5 ease;
		content: '${({ label }) => (label ? label : '')}';
		position: absolute;
		font-size: ${({ stateLabel }) => (stateLabel ? '0.9em' : '1.3em')};
		top: 12px;
		left: 10px;
		transition: 0.3s ease;
		color: ${({ colorLabel }) =>
			colorLabel ? colorLabel : ' rgba(255, 1, 1, 0.8)'};
		font-family: 'Montserrat', sans-serif;
		cursor: text;
		transform: translateY(
			${({ stateLabel, sizeHeight }) =>
				stateLabel ? '-6px' : `${sizeHeight}px`}
		);
	}

	.Icon {
		position: absolute;
		font-size: 2em;
		right: 0;
		cursor: pointer;
		bottom: ${({ sizeHeight }) =>
			sizeHeight ? `${sizeHeight + 2}px` : '0px'};
		z-index: 3;
	}

	@media (max-width: 600px) {
		${({ mediaCustom }) => mediaCustom}
	}
`;
