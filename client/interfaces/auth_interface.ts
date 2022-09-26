import IUser from "./user_interface";

export interface LoginDataInterface {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: IUser;
  success: boolean;
}
