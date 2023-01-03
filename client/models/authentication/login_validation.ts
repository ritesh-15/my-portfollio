import * as yup from "yup"

const loginSchema = yup.object({
  email: yup.string().email().required("Email address is required!"),
  password: yup.string().min(6).required("Password is required!"),
})

export default loginSchema
