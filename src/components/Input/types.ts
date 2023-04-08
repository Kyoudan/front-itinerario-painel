import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface IStyledDiv {
	width?: string;
	height?: string;
	label?: string;
	stateLabel?: boolean;
	sizeHeight?: number;
}

export interface IStyledInput {
	borderRadius?: string;
}

export interface IProps {
	width?: string;
	height?: string;
	label?: string;
	sizeHeight?: string;
	isHide?: boolean;
	borderRadius?: string;
	onText?: ChangeEventHandler<HTMLInputElement>;
}
