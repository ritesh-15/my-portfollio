import {
  IGetAllProjects,
  IGetAllTechStack,
  IGetSingleProject,
  IGetTechStackById,
} from "../../../interfaces/project_interface";
import apiService from "../api/api.service";

interface IUpdateTechStackArgs {
  id: string;
  data: FormData;
}

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
    getTechStackById: builder.query<IGetTechStackById, string>({
      query: (id) => {
        return {
          url: `/project/tech-stack/${id}`,
          method: "GET",
        };
      },
    }),
    updateTechStack: builder.mutation<any, IUpdateTechStackArgs>({
      query: ({ id, data }) => {
        return {
          url: `/project/tech-stack/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: [{ type: "TechStack" }],
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
  useGetTechStackByIdQuery,
  useUpdateTechStackMutation,
} = projectService;
