export default interface IUser {
  id: string
  email: string
  info: About
}

export interface About {
  heading: string
  subHeading: string
  about: string
  image: Image
  contactHeading: string
  contactSubHeading: string
}

export interface Image {
  publicId: string
  url: string
  id: string
}
