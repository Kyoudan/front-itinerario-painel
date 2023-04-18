import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons/lib';

export interface IProps {
	message?: string;
	width?: string;
	height?: string;
	margin?: string;
	borderRadius?: string;
	isScale?: boolean;
	isLoading?: boolean;
	background?: string;
	backgroundColor?: string;
	border?: string;
	hover?: string;
	backgroundHover?: string;
	justifyContent?: string;
	mediaCustom?: string;
	color?: string;
	boxShadow?: string;
	boxShadowHover?: string;
	fontSize?: string;
	colorLoading?: string;
	sizeLoading?: number;
	onMouseHover?: MouseEventHandler;
	onMouseDown?: MouseEventHandler;
	Icon?: IconType;
	onClick?: MouseEventHandler;
}

export interface IStyledButton {
	width?: string;
	height?: string;
	margin?: string;
	borderRadius?: string;
	background?: string;
	backgroundColor?: string;
	border?: string;
	hover?: string;
	backgroundHover?: string;
	isScale?: boolean;
	justifyContent?: string;
	mediaCustom?: string;
	color?: string;
	boxShadow?: string;
	boxShadowHover?: string;
	fontSize?: string;
}
