import * as Yup from "yup"

const connectSchema = Yup.object({
  name: Yup.string().required("Please provide your name!").min(2),
  email: Yup.string()
    .required("Please provide email address!")
    .email("Email address should be valid!"),
  message: Yup.string()
    .required("Please provide suggestion or message!")
    .min(5),
})

export default connectSchema
