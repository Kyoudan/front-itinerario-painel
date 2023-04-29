export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IAxiosUser {
  data: {
    id: number;
    name: string;
    email: string;
    image: string;
    createdAt: string;
  };
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  image: string;
  createdAt: string;
}
