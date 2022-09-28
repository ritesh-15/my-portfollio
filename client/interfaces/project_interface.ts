export interface ITechStack {
  image: {
    url: string;
  };
  name: string;
  id: string;
}

export interface IGetAllTechStack {
  success: boolean;
  techStacks: ITechStack[];
}
