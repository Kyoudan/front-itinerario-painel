import { MouseEventHandler, ChangeEventHandler } from "react";
export interface IProps {
  onClick: MouseEventHandler;
  text: ChangeEventHandler<HTMLInputElement>;
  widthCard?: string;
  loading?: boolean;
}
