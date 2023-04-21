import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface IStyledDiv {
	width?: string;
	height?: string;
	label?: string;
	stateLabel?: boolean;
	sizeHeight?: number;
	mediaCustom?: string;
	colorLabel?: string;
	margin?: string;
	customCode?: string;
}

export interface IStyledInput {
	borderRadius?: string;
	mediaCustom?: string;
	border?: string;
	color?: string;
	padding?: string;
	textAlign?: string;
	fontSize?: string;
	height?: string;

}

export interface IProps {
	width?: string;
	height?: string;
	label?: string;
	sizeHeight?: string;
	isHide?: boolean;
	borderRadius?: string;
	mediaCustom?: string;
	margin?: string;
	border?: string;
	colorLabel?: string;
	color?: string;
	value?: string | number;
	labelActive?: boolean;
	type?: string;
	padding?: string;
	textAlign?: string;
	fontSize?: string;
	max?: number;
	customCode?: string;
	onText?: ChangeEventHandler<HTMLInputElement>;
}
