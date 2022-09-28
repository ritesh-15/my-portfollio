import { IGetAllTechStack } from "../../../interfaces/project_interface";
import apiService from "../api/api.service";

export const projectService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getAllTechStacks: builder.query<IGetAllTechStack, undefined>({
      query: () => "/project/tech-stack",
    }),
    addTechStack: builder.mutation({
      query: (payload) => {
        return {
          url: "/project/tech-stack",
          method: "POST",
          body: {
            ...payload,
          },
          headers: {
            "content-type": "multipart/form-data, boundry=",
          },
        };
      },
    }),
  }),
});

export const { useGetAllTechStacksQuery, useAddTechStackMutation } =
  projectService;
