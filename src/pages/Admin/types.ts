export interface IAxios {
  data: {
    data: IAdmins[];
    count: number;
  };
}

export interface IAdmins {
  id: number;
  name: string;
  description: string;
  email: string;
  createdAt: string;
}
