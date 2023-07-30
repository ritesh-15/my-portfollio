export type IProjectResponse = IProject[]

export interface IProject {
  _id: string
  demoLink?: string
  gitHubLink?: string
  description: string
  image?: Image
  tags?: Tag[]
  title: string
  videoLink?: string
}

export interface Image {
  _type: string
  asset: Asset
}

export interface Asset {
  _ref: string
  _type: string
}

export interface Tag {
  image: Image2
  name: string
}

export interface Image2 {
  _type: string
  asset: Asset2
}

export interface Asset2 {
  _ref: string
  _type: string
}
