import { NextPage } from "next";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLoginMutation } from "../../app/services/auth/auth.service";
import { useFormik } from "formik";
import { loginSchema } from "../../models/authentication";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useRouter } from "next/router";

interface LoginFormState {
  password: string;
  email: string;
}

const initialValues: LoginFormState = {
  email: "",
  password: "",
};

const Login: NextPage = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/admin");
    }
  }, [user]);

  const { handleChange, handleSubmit, values, errors, touched } =
    useFormik<LoginFormState>({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        handleLoginRequest(values);
      },
    });

  const [login, { error, isError, isLoading }] = useLoginMutation();

  const handleLoginRequest = async (values: LoginFormState) => {
    const response = await login(values);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <section className="min-h-screen flex items-center flex-col">
      <div className="my-12">
        <h1 className="font-nunito text-2xl font-bold mb-2">
          Welcome back Ritesh!
        </h1>
        <p className="font-nunito">
          Enter your credentials to continue to a dashboard
        </p>
      </div>

      <form onSubmit={handleSubmit} action="" className="w-full max-w-[350px]">
        <div className="mb-4">
          <TextField
            id="email"
            type="email"
            label="Email address"
            variant="outlined"
            fullWidth
            value={values.email}
            onChange={handleChange}
            error={errors.email && touched.email ? true : false}
            helperText={errors.email}
          />
        </div>

        <div className="mb-8">
          <FormControl variant="outlined" fullWidth>
            <InputLabel
              error={errors.password && touched.password ? true : false}
              htmlFor="outlined-adornment-password"
            >
              Password
            </InputLabel>

            <OutlinedInput
              fullWidth
              error={errors.password && touched.password ? true : false}
              id="password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            {errors.password && touched.password ? (
              <FormHelperText
                error={errors.password && touched.password ? true : false}
                id="outlined-weight-helper-text"
              >
                {errors.password}
              </FormHelperText>
            ) : null}
          </FormControl>
        </div>

        <Button
          className="bg-primary"
          size="large"
          fullWidth
          variant="contained"
          type="submit"
        >
          Login
        </Button>
      </form>
    </section>
  );
};

export default Login;
