import { useRouter } from "next/router";
import React, { FormEvent, ReactElement, useEffect, useState } from "react";
import Layout from "../../../components/admin/Layout";
import { NextPageWithLayout } from "../../_app";
import { FormControlLabel, Switch, TextField } from "@mui/material";
import {
  useGetSingleProjectQuery,
  useRemoveProjectMutation,
} from "../../../app/services/project/project.service";
import { LoadingButton } from "@mui/lab";
import { IProject } from "../../../interfaces/project_interface";
import { AiOutlineClose } from "react-icons/ai";

interface UpdateProjectFormState {
  title: string;
  description: string;
  gitHubRepoLink: string;
  demoLink: string;
}

const SingleProject: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  const [values, setValues] = useState<IProject | null>(null);

  const { data } = useGetSingleProjectQuery(id as string);

  const [removeProject, { isLoading: isRemoveProjectLoading }] =
    useRemoveProjectMutation();

  useEffect(() => {
    if (!data) return;
    setValues(data.project);
    setIsMobileApplication(data.project.isMobileApplication);
  }, [data]);

  const handleIsMobileApplication = () => {
    setIsMobileApplication(!isMobileApplication);
  };

  const handleRemoveProject = async (e: FormEvent) => {
    e.preventDefault();

    if (!id) return;
    await removeProject(id as string);
    router.push("/admin/projects");
  };

  const [isMobileApplication, setIsMobileApplication] =
    useState<boolean>(false);

  return (
    <div className="p-4">
      <form action="" className="flex gap-4 w-full ">
        <div className="flex-1">
          <div className="mb-6">
            <TextField
              fullWidth
              variant="filled"
              label="Title"
              id="title"
              value={values?.title}
              name="title"
            />
          </div>
          <div className="mb-6">
            <TextField
              id="filled-textarea"
              label="Description"
              name="description"
              multiline
              variant="filled"
              value={values?.description}
              fullWidth
              rows={10}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-6">
            <TextField
              variant="filled"
              fullWidth
              label="Git Hub Link"
              name="gitHubRepoLink"
              id="fullWidth"
              value={values?.gitHubRepo}
            />
          </div>
          <div className="mb-6">
            <TextField
              variant="filled"
              fullWidth
              label="Demo Link"
              id="fullWidth"
              value={values?.demoLink}
              name="demoLink"
            />
          </div>
          <div className="mb-6">
            <FormControlLabel
              control={<Switch onChange={handleIsMobileApplication} />}
              label="Is mobile application?"
            />
          </div>
          <div className="mb-6">
            <div className="relative">
              <img
                src={values?.images[0].url}
                className="w-full h-[250px] rounded-lg"
              />
              <AiOutlineClose className="text-4xl absolute top-0 right-0 bg-gray-200 rounded-full p-2 cursor-pointer" />
            </div>
          </div>
          <div className="mb-6 flex items-center gap-4">
            <LoadingButton
              loadingPosition="start"
              variant="contained"
              fullWidth
              className="bg-primary"
              size="large"
              type="submit"
            >
              Update
            </LoadingButton>

            <LoadingButton
              loadingPosition="start"
              variant="outlined"
              fullWidth
              size="large"
              onClick={handleRemoveProject}
              loading={isRemoveProjectLoading}
            >
              Delete
            </LoadingButton>
          </div>
        </div>
      </form>
    </div>
  );
};

SingleProject.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SingleProject;
