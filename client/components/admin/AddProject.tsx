import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Button,
  FilledInput,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
} from "@mui/material";
import {
  useAddProjectMutation,
  useGetAllTechStacksQuery,
} from "../../app/services/project/project.service";
import { useFormik } from "formik";
import { addProjectSchema } from "../../models/project";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";

interface AddProjectFormState {
  title: string;
  description: string;
  gitHubRepoLink: string;
  demoLink: string;
}

const initialValues: AddProjectFormState = {
  title: "",
  description: "",
  gitHubRepoLink: "",
  demoLink: "",
};

const AddProject = () => {
  // states and hooks
  const { enqueueSnackbar } = useSnackbar();

  const { data } = useGetAllTechStacksQuery(undefined);
  const { handleChange, handleSubmit, errors, values } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      handleAddNewProjectRequest(values);
    },
    validationSchema: addProjectSchema,
  });

  const [image, setImage] = useState<File | null>(null);

  const [isMobileApplication, setIsMobileApplication] =
    useState<boolean>(false);
  const [stacks, setStacks] = React.useState<string[]>([]);

  const [addProject, { isLoading, error }] = useAddProjectMutation();

  // functions

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setImage(files[0]);
  };

  const handleAddNewProjectRequest = async (values: AddProjectFormState) => {
    if (!image) {
      enqueueSnackbar("Project image not found please add project image!");
      return;
    }

    if (stacks.length === 0) {
      enqueueSnackbar("At least one tech stack is !");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append(
      "data",
      JSON.stringify({
        ...values,
        isMobileApplication,
        gitHubRepo: values.gitHubRepoLink,
        techStack: stacks,
      })
    );

    await addProject(formData);

    if (error && "status" in error) {
      enqueueSnackbar((error as any).data.message, { variant: "error" });
    }
  };

  const handleTechStackChange = (event: SelectChangeEvent<typeof stacks>) => {
    const {
      target: { value },
    } = event;
    setStacks(typeof value === "string" ? value.split(",") : value);
  };

  const handleIsMobileApplication = () => {
    setIsMobileApplication(!isMobileApplication);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} action="" className="flex gap-4 w-full ">
        <div className="flex-1">
          <div className="mb-6">
            <TextField
              fullWidth
              variant="filled"
              label="Title"
              id="title"
              onChange={handleChange}
              value={values.title}
              name="title"
              error={errors.title ? true : false}
              helperText={errors.title ? errors.title : ""}
            />
          </div>
          <div className="mb-6">
            <TextField
              id="filled-textarea"
              label="Description"
              name="description"
              multiline
              variant="filled"
              value={values.description}
              onChange={handleChange}
              fullWidth
              rows={10}
              error={errors.description ? true : false}
              helperText={errors.description ? errors.description : ""}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-6">
            <TextField
              variant="filled"
              fullWidth
              label="Git Hub Link"
              onChange={handleChange}
              name="gitHubRepoLink"
              id="fullWidth"
              value={values.gitHubRepoLink}
              error={errors.gitHubRepoLink ? true : false}
              helperText={errors.gitHubRepoLink ? errors.gitHubRepoLink : ""}
            />
          </div>
          <div className="mb-6">
            <TextField
              variant="filled"
              fullWidth
              label="Demo Link"
              onChange={handleChange}
              id="fullWidth"
              value={values.demoLink}
              name="demoLink"
              error={errors.demoLink ? true : false}
              helperText={errors.demoLink ? errors.demoLink : ""}
            />
          </div>
          <div className="mb-6">
            <FormControl variant="filled" fullWidth>
              <InputLabel id="demo-multiple-name-label">
                Choose tech stack
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={stacks}
                onChange={handleTechStackChange}
                input={<FilledInput />}
                label="Choose tech stack"
                variant="filled"
              >
                {data?.techStacks.map((stack) => (
                  <MenuItem
                    className="flex items-center"
                    key={stack.id}
                    value={stack.id}
                  >
                    <Image src={stack.image.url} width={30} height={30} />
                    <span className="ml-4">{stack.name}</span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="mb-6">
            <FormControlLabel
              control={<Switch onChange={handleIsMobileApplication} />}
              label="Is mobile application?"
            />
          </div>
          <div className="mb-6">
            {image ? (
              <div className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  className="w-full h-[250px] rounded-lg"
                />
                <AiOutlineClose
                  onClick={() => setImage(null)}
                  className="text-4xl absolute top-0 right-0 bg-gray-200 rounded-full p-2 cursor-pointer"
                />
              </div>
            ) : (
              <>
                <label htmlFor="" className="font-nunito">
                  Upload Project Image
                </label>
                <Button className="ml-4" variant="outlined" component="label">
                  Upload
                  <input
                    hidden
                    onChange={handleImageChange}
                    accept="image/*"
                    multiple
                    type="file"
                  />
                </Button>
              </>
            )}
          </div>
          <div className="mb-6">
            <LoadingButton
              loading={isLoading}
              loadingPosition="start"
              variant="contained"
              fullWidth
              className="bg-primary"
              size="large"
              type="submit"
            >
              Create
            </LoadingButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
