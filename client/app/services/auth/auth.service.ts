import {
  ILoginResponse,
  LoginDataInterface,
} from "../../../interfaces/auth_interface";
import apiService from "../api/api.service";

export const authService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, LoginDataInterface>({
      query: (data: LoginDataInterface) => {
        return {
          url: "/auth/login",
          body: data,
          method: "POST",
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authService;
