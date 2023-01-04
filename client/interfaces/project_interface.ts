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

export interface IProject {
  id: string
  title: string
  description: string
  isMobileApplication: boolean
  gitHubLink: string
  demoLink: string
  tagsId: string[]
  isFeatured: boolean
  createdAt: string
  updatedAt: string
  images: Image[]
  tags: Tag[]
}

export interface Image {
  publicId: string
  url: string
}

export interface Tag {
  name: string
  image: Image2
}

export interface Image2 {
  url: string
  publicId: string
}
