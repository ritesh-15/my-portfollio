import React, { ChangeEvent, ReactElement, useState } from "react";
import Layout from "../../components/admin/Layout";
import { NextPageWithLayout } from "../../pages/_app";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { AiOutlineClose } from "react-icons/ai";
import { ITechStack } from "../../interfaces/project_interface";
import { useFormik } from "formik";
import Image from "next/image";
import { addTechStackSchema } from "../../models/project";
import { useUpdateTechStackMutation } from "../../app/services/project/project.service";
import { useSnackbar } from "notistack";

interface ISingleTechStackProps {
  techStack: ITechStack;
}

const SingleTechStck: NextPageWithLayout<ISingleTechStackProps> = ({
  techStack,
}) => {
  const [image, setImage] = useState<File | null>(null);

  const { enqueueSnackbar } = useSnackbar();

  const { handleChange, handleSubmit, errors, values } = useFormik({
    initialValues: {
      name: techStack.name,
    },
    onSubmit: (values) => {
      handleUpdateTechStackRequest(values.name);
    },
    validationSchema: addTechStackSchema,
  });

  const [updateTechStack, { isLoading, error }] = useUpdateTechStackMutation();

  const handleUpdateTechStackRequest = async (name: string) => {
    const formData = new FormData();
    formData.append("name", name);
    if (image) {
      formData.append("image", image);
    }

    await updateTechStack({ id: techStack.id, data: formData });

    if (error && "status" in error) {
      enqueueSnackbar((error as any).data.message, { variant: "error" });
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setImage(files[0]);
  };

  return (
    <form onSubmit={handleSubmit} action="" className="w-full">
      <div className="mb-6">
        <div className="flex flex-col items-center">
          {image ? (
            <div className="relative">
              <Image
                width={150}
                height={150}
                objectFit="cover"
                className="rounded-full"
                src={URL.createObjectURL(image)}
              />
              <AiOutlineClose
                onClick={() => setImage(null)}
                className="text-4xl absolute top-0 right-0 bg-gray-200 rounded-full p-2 cursor-pointer"
              />
            </div>
          ) : (
            <label htmlFor="image" className="mt-4 font-nunito cursor-pointer">
              <Image
                src={techStack.image.url}
                width={150}
                height={150}
                objectFit="cover"
              />

              <input
                accept="image/*"
                type="file"
                className="hidden"
                name="image"
                id="image"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>
      </div>
      <div className="mb-6">
        <TextField
          fullWidth
          variant="filled"
          label="Name"
          id="name"
          required
          onChange={handleChange}
          name="name"
          value={values.name}
          error={errors.name ? true : false}
          helperText={errors.name ? errors.name : ""}
        />
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
          Update
        </LoadingButton>
      </div>
    </form>
  );
};

SingleTechStck.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SingleTechStck;
