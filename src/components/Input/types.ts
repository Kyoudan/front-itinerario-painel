import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface IStyledDiv {
	width?: string;
	height?: string;
	label?: string;
	stateLabel?: boolean;
	sizeHeight?: number;
	mediaCustom?: string;
}

export interface IStyledInput {
	borderRadius?: string;
	mediaCustom?: string;
}

export interface IProps {
	width?: string;
	height?: string;
	label?: string;
	sizeHeight?: string;
	isHide?: boolean;
	borderRadius?: string;
	mediaCustom?: string;
	onText?: ChangeEventHandler<HTMLInputElement>;
}
