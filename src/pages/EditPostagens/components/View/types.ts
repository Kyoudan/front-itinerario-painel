export interface IProps {
  textTitle: string;
  textDescription: string;
  text: IItemsContent[];
}

export interface IItemsContent {
  id: number;
  text?: string;
  size: number;
  type?: string;
}

export interface IStyledTextArea {
    fontSize?: number
}
