import { NextPage } from "next";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLoginMutation } from "../../app/services/auth/auth.service";

interface LoginFormState {
  password: string;
  showPassword: boolean;
  email: string;
}

const Login: NextPage = () => {
  const [values, setValues] = useState<LoginFormState>({
    showPassword: false,
    password: "",
    email: "",
  });

  const [login, { error, isError, isLoading }] = useLoginMutation();

  const handleChange =
    (prop: keyof LoginFormState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = values;

    if (!email || !password) {
      // TODO
      return;
    }

    const response = await login({ email, password });
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

      <form action="" className="w-full max-w-[350px]">
        <div className="mb-4">
          <TextField
            id="email"
            type="email"
            label="Email address"
            variant="outlined"
            fullWidth
            value={values.email}
            onChange={handleChange("email")}
          />
        </div>

        <div className="mb-8">
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              fullWidth
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>

        <button
          onClick={handleSubmit}
          className="text-white bg-primary py-3 rounded-md font-nunito w-full"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
