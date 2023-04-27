export interface IAxios {
  data: {
    data: ITags[];
    count: number;
  };
}

export interface ITags {
  id: number;
  name: string;
  createdAt: string;
}
