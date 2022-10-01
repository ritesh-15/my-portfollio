import {
  IGetAllProjects,
  IGetAllTechStack,
  IGetSingleProject,
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
    getSingleProject: builder.query<IGetSingleProject, string>({
      query: (id) => `/project/single/${id}`,
    }),
    removeProject: builder.mutation<any, string>({
      query: (id) => {
        return {
          url: `/project/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Projects" }],
    }),
  }),
});

export const {
  useGetAllTechStacksQuery,
  useAddTechStackMutation,
  useGetAllProjectsQuery,
  useAddProjectMutation,
  useGetSingleProjectQuery,
  useRemoveProjectMutation,
} = projectService;
