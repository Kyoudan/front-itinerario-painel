import { ReactNode } from 'react';

export interface IProps {
	children?: ReactNode;
	borderRadius?: string;
	padding?: string;
	backgroundColor?: string;
	mediaCustom?: string;
}

export interface IStyledCard {
	borderRadius?: string;
	padding?: string;
	backgroundColor?: string;
	mediaCustom?: string;
}
