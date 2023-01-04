export default interface IUser {
  user: User
}

export interface User {
  id: string
  email: string
  about: About
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
