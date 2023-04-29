export interface IAxios {
  data: {
    data: IUsers[];
    count: number;
  };
}

export interface IUsers {
  id: number;
  name: string;
  description: string;
  email: string;
  createdAt: string;
}
