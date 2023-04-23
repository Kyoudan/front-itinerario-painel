import { ReactNode } from "react";

export interface IProps {
  children?: ReactNode;
  borderRadius?: string;
  padding?: string;
  backgroundColor?: string;
  mediaCustom?: string;
  flexDirection?: string;
  width?: string;
}

export interface IStyledCard {
  borderRadius?: string;
  padding?: string;
  backgroundColor?: string;
  mediaCustom?: string;
  flexDirection?: string;
  width?: string;
}
