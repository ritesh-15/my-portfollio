export interface ITechStack {
  image: {
    url: string
    publicId: string
  }
  name: string
  id: string
}

export interface IGetTechStackById {
  success: boolean
  techStack: ITechStack
}

export interface IProject {
  id: string
  title: string
  description: string
  isMobileApplication: boolean
  gitHubRepo: string
  demoLink: string
  createdAt: Date
  updateAt: Date
  images: {
    publicId: string
    url: string
  }[]
  techStack: ITechStack[]
}

export interface IGetAllProjects {
  success: boolean
  projects: IProject[]
}

export interface IGetSingleProject {
  success: boolean
  project: IProject
}

export interface IGetAllTechStack {
  success: boolean
  techStacks: ITechStack[]
}
