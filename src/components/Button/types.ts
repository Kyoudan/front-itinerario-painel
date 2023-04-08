import {MouseEventHandler} from "react"

export interface IProps {
	message?: string;
	width?: string;
	height?: string;
	margin?: string;
	borderRadius?: string;
	isScale?: boolean;
	isLoading?: boolean;
	onClick?: MouseEventHandler;
}

export interface IStyledButton {
	width?: string;
	height?: string;
	margin?: string;
	borderRadius?: string;
	isScale?: boolean;
}
