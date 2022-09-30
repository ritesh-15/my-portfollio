import { TextField } from "@mui/material";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useFormik } from "formik";
import { addTechStackSchema } from "../../models/project";
import { useAddTechStackMutation } from "../../app/services/project/project.service";
import { useAuth } from "../../hooks";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSnackbar } from "notistack";

interface AddTechStackFormState {
  name: string;
}

const initialValues: AddTechStackFormState = {
  name: "",
};

const AddTechStack = () => {
  // authenticate
  useAuth({ isAuthPage: false, route: "/admin/login" });

  const { enqueueSnackbar } = useSnackbar();

  const [image, setImage] = useState<File | null>(null);
  const [addTechStack, { isLoading, error, data }] = useAddTechStackMutation();

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: addTechStackSchema,
    onSubmit: (values) => {
      handleAddTechStackRequest(values);
    },
  });

  const handleAddTechStackRequest = async (values: AddTechStackFormState) => {
    if (!image) return;

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("image", image);
    await addTechStack(formData);

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
    <div>
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
              <label
                htmlFor="image"
                className="mt-4 font-nunito cursor-pointer"
              >
                <div className="border mx-auto rounded-full w-[80px] h-[80px] flex items-center justify-center border-primary">
                  <BsImageFill className="text-2xl" />
                </div>
                <input
                  accept="image/jpeg"
                  type="file"
                  className="hidden"
                  name="image"
                  id="image"
                  onChange={handleImageChange}
                />
                <br />
                Choose image
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
            Create
          </LoadingButton>
        </div>
      </form>
    </div>
  );
};

export default AddTechStack;
