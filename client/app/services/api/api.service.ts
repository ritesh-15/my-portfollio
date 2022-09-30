import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { API_SERVER_URL } from "../../../constants";
import { logout } from "../../features/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: API_SERVER_URL,
  credentials: "include",
});

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // make the refresh token request
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);

    if (refreshResult.data) {
      // retry the query with new tokens
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

const apiService = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
  tagTypes: ["TechStack", "Projects"],
});

export default apiService;
