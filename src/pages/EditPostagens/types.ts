export interface IPosts {
  id: number;
  name: string;
  image: string;
  description: string;
  finished: boolean;
  color: string;
  author: string;
  uuid: string;
  createdAt: string;
  postTags: {
    id: number;
    name: string;
  };
  users: {
    id: number;
    name: string;
    email: string;
  };
  PostContent: IPostContent[];
}

export interface IPostAxios {
  data: IPosts;
}

export interface IPostContent {
  id: number;
  content: string;
  type: string;
  size: number;
  reference: string;
}

export interface IStyledTextArea {
  height?: string;
  type?: string;
  fontSize?: number;
}

export interface IStyledDivRenderContent {
  label?: string;
}
