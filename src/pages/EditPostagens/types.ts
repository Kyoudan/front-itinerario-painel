export interface IPosts {
  data: {
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
  };
  count: number;
}

export interface IPostAxios {
  data: {
    data: {
      id: number;
      name: string;
      description: string;
      image: string;
      finished: boolean;
      author: string;
      color: string;
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
    };
    count: number;
  };
}

export interface IPostContent {
  id: number;
  content: string;
  type: string;
  size: number;
}

export interface IStyledTextArea {
  height?: string;
  type?: string;
  fontSize?: number;
}

export interface IStyledDivRenderContent {
  label?: string;
}
