import {
  IGetAllProjects,
  IGetAllTechStack,
} from "../../../interfaces/project_interface";
import apiService from "../api/api.service";

export const projectService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getAllTechStacks: builder.query<IGetAllTechStack, undefined>({
      query: () => "/project/tech-stack",
      providesTags: ["TechStack"],
    }),
    addTechStack: builder.mutation<any, any>({
      query: (payload) => {
        return {
          url: "/project/tech-stack",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: [{ type: "TechStack" }],
    }),
    addProject: builder.mutation<any, FormData>({
      query: (payload) => {
        return {
          url: "/project",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: [{ type: "Projects" }],
    }),
    getAllProjects: builder.query<IGetAllProjects, undefined>({
      query: () => "/project",
    }),
  }),
});

export const {
  useGetAllTechStacksQuery,
  useAddTechStackMutation,
  useGetAllProjectsQuery,
  useAddProjectMutation,
} = projectService;
