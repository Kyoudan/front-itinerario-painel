export interface IAxios {
  data: {
    data: Categories[];
    count: number;
  };
}

export interface Categories {
  id: number;
  name: string;
  createdAt: string;
}
