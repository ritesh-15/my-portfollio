import { NextPage } from "next"
import { useFormik } from "formik"
import { loginSchema } from "../../models/authentication"
import { useAuth } from "../../hooks"
import { Button, FormField } from "../../components"
import { useLoginMutation } from "../../app/services/auth/auth.service"
import { setCredentials } from "../../app/features/authSlice"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"

interface LoginFormState {
  password: string
  email: string
}

const initialValues: LoginFormState = {
  email: "",
  password: "",
}

const Login: NextPage = () => {
  useAuth({ isAuthPage: true, route: "/admin" })
  const router = useRouter()
  const dispatch = useDispatch()

  const [login, { data }] = useLoginMutation()

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      await login(values)
      if (data) {
        dispatch(setCredentials({ user: data.user }))
        router.push("/admin")
      }
    },
  })

  return (
    <section className="min-h-screen max-w-[500px] mx-auto flex items-start flex-col">
      <div className="my-12 ">
        <h1 className="font-opensans text-2xl font-bold mb-2">
          Welcome back Ritesh!
        </h1>
        <p className="font-opensans">
          Enter your credentials to continue to a dashboard
        </p>
      </div>

      <form onSubmit={handleSubmit} action="" className="w-full ">
        <FormField
          name="email"
          onChange={handleChange}
          value={values.email}
          error={errors.email}
          label="Email address"
          parentclass="mb-4"
        />
        <FormField
          name="password"
          onChange={handleChange}
          value={values.password}
          error={errors.password}
          label="Password"
          parentclass="mb-4"
        />
        <Button
          type="submit"
          title="Login"
          className="w-full bg-secondary text-white"
        />
      </form>
    </section>
  )
}

export default Login
