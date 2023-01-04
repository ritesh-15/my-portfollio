interface IUser {
  id: string
  email: string
  about: {
    heading: string
    subHeading: string
    contactHeading: string
    contactSubHeading: string
    image: {
      publicId: string
      url: string
    }
    about: string
  }
}

export default IUser
