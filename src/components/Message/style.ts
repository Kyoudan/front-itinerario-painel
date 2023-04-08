import styled from '@emotion/styled';
import { IStyledMessage } from './types';

export const styledMessage = styled.p<IStyledMessage>`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '2em')};
	margin: ${({ margin }) => (margin ? margin : '0px')};
	text-transform: ${({ toUpper }) => (toUpper ? 'uppercase' : '')};
	font-family: ${({ fontFamily }) =>
		fontFamily ? fontFamily : 'Bebas Neue, cursive'};
	border: ${({ border }) => (border ? border : '')};
	border-color: ${({ borderColor }) => (borderColor ? borderColor : '')};
	border-top: ${({ borderTop }) => (borderTop ? borderTop : '')};
	border-bottom: ${({ borderBottom }) => (borderBottom ? borderBottom : '')};
	border-left: ${({ borderLeft }) => (borderLeft ? borderLeft : '')};
	border-right: ${({ borderRight }) => (borderRight ? borderRight : '')};
	border-width: ${({ borderWidth }) => (borderWidth ? borderWidth : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	color: ${({ color }) => (color ? color : '#000')};
`;
