export interface IContact {
  name: string;
  email: string;
  message: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface INewContact {
  name: string;
  message: string;
  email: string;
}

export interface INewContactResponse {
  success: boolean;
  message: String;
}

export interface IGetAllContact {
  success: boolean;
  contacts: IContact[];
}
