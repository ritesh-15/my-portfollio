interface IUser {
  id: string;
  email: string;
  about: {
    name: string;
    about: string;
  };
}

export default IUser;
