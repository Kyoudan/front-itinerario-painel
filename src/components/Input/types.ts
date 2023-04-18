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
}

export interface IStyledInput {
	borderRadius?: string;
	mediaCustom?: string;
	border?: string;
	color?: string;
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
	value?: string;
	labelActive?: boolean;
	onText?: ChangeEventHandler<HTMLInputElement>;
}
