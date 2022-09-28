import { CloseOutlined } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useFormik } from "formik";
import { addTechStackSchema } from "../../models/project";
import { useAddTechStackMutation } from "../../app/services/project/project.service";

interface AddTechStackFormState {
  name: string;
}

const initialValues: AddTechStackFormState = {
  name: "",
};

const AddTechStack = () => {
  const [image, setImage] = useState<File | null>(null);
  const [addTechStack] = useAddTechStackMutation();

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: addTechStackSchema,
    onSubmit: (values) => {
      if (image) {
        handleAddTechStackRequest(values);
      }
    },
  });

  const handleAddTechStackRequest = async (values: AddTechStackFormState) => {
    const formData = new FormData();
    formData.append("image", image!!);
    formData.append("name", values.name);
    console.log(values.name);

    const response = await addTechStack(formData);

    console.log(response);
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
          <Button
            color="primary"
            className="bg-primary"
            size="large"
            fullWidth
            variant="contained"
            type="submit"
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTechStack;
