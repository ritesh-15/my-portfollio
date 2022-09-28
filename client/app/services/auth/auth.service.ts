import {
  ILoginResponse,
  IProfileResponse,
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
    profile: builder.query<IProfileResponse, undefined>({
      query: () => "/auth/me",
    }),
  }),
});

export const { useLoginMutation, useProfileQuery } = authService;
