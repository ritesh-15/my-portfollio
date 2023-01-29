export type IPageInfoResponse = IPageInfo[]

export interface IPageInfo {
  about: string
  contact: Contact
  email: string
  hero: Hero
  image: Image
  name: string
}

export interface Contact {
  heading: string
  subHeding: string
}

export interface Hero {
  heading: string
  subHeding: string
}

export interface Image {
  _type: string
  asset: Asset
}

export interface Asset {
  _ref: string
  _type: string
}
