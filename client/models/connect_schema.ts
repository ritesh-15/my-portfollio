import * as Yup from "yup"

const ContactSchema = Yup.object({
  name: Yup.string().required("Name is required!").min(2),
  email: Yup.string()
    .required("Email address is required!")
    .email("Email address should be valid!"),
  message: Yup.string()
    .required("Please provide suggestion or message!")
    .min(5),
})

export default ContactSchema
