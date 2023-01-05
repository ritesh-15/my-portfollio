import React, { ChangeEvent, ReactElement, useEffect, useState } from "react"
import { useFormik } from "formik"
import Image from "next/image"
import { useSnackbar } from "notistack"
import {
  useAddProjectMutation,
  useGetAllTechStacksQuery,
} from "../../../app/services/project/project.service"
import { Button, FormField } from "../../../components"
import { addProjectSchema } from "../../../models/project"
import Layout from "../../../components/admin/Layout"
import SelectTag from "../../../components/admin/SelectTag"
import { ITechStack } from "../../../interfaces/project_interface"
import { Router } from "@mui/icons-material"
import { useRouter } from "next/router"
import { useAuth } from "../../../hooks"

interface AddProjectFormState {
  title: string
  description: string
  gitHubLink: string
  demoLink: string
}

const initialValues: AddProjectFormState = {
  title: "",
  description: "",
  gitHubLink: "",
  demoLink: "",
}

const AddProject = () => {
  // states and hooks
  useAuth({ isAuthPage: false, route: "/admin/login" })
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()

  const { data } = useGetAllTechStacksQuery("")

  const { handleChange, handleSubmit, errors, values } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values)
      handleAddNewProjectRequest(values)
    },
    validationSchema: addProjectSchema,
  })

  const [image, setImage] = useState<File | null>(null)
  const [selectedTags, setSelectedTags] = useState<ITechStack[]>([])
  const [tagName, setTagName] = useState("")

  const [addProject, { error }] = useAddProjectMutation()

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    setImage(files[0])
  }

  const handleAddNewProjectRequest = async (values: AddProjectFormState) => {
    if (!image) {
      enqueueSnackbar("Project image not found please add project image!")
      return
    }

    if (selectedTags.length === 0) {
      enqueueSnackbar("At least one tech stack is !")
      return
    }

    const formData = new FormData()
    formData.append("image", image)
    formData.append(
      "data",
      JSON.stringify({
        ...values,
        techStack: selectedTags.map((tag) => tag.id),
        gitHubRepo: values.gitHubLink,
        isMobileApplication: false,
      })
    )

    await addProject(formData)

    if (error && "status" in error) {
      enqueueSnackbar((error as any).data.message, { variant: "error" })
    } else {
      router.push("/admin/projects")
    }
  }

  function handleChangeTagName(e: ChangeEvent<HTMLInputElement>) {
    setTagName(e.target.value)
  }

  function removeFromSelectedTags(tagId: string) {
    const filters = selectedTags.filter((tag) => tag.id !== tagId)
    setSelectedTags([...filters])
  }

  function handleSelectedTags(selectedTag: ITechStack) {
    const filter = selectedTags.find((tag) => tag.id === selectedTag.id)
    if (!filter) setSelectedTags([...selectedTags, selectedTag])
  }

  return (
    <div className="p-4">
      {image && (
        <div className="h-[350px] relative mb-6">
          <Image
            src={URL.createObjectURL(image)}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <div className="mb-6">
        <input
          onChange={handleImageChange}
          type="file"
          name="image"
          id="image"
          className="hidden"
        />
        <label
          className="bg-white border border-secondary rounded-md cursor-pointer px-2 py-3 font-opensans"
          htmlFor="image"
        >
          Choose Image
        </label>
      </div>

      <form onSubmit={handleSubmit} action="">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            onChange={handleChange}
            value={values.title}
            error={errors.title}
            name="title"
            label="Project title"
            parentclass="mb-4"
          />
          <FormField
            onChange={handleChange}
            value={values.gitHubLink}
            error={errors.gitHubLink}
            name="gitHubLink"
            label="Git Hub Link"
            parentclass="mb-4"
          />
          <FormField
            onChange={handleChange}
            value={values.demoLink}
            error={errors.demoLink}
            name="demoLink"
            label="Deployed Link"
            parentclass="mb-4"
          />
          <SelectTag
            tags={data?.techStacks}
            handleChange={handleChangeTagName}
            tagName={tagName}
            selectedTags={selectedTags}
            handleSelectedTag={handleSelectedTags}
            removeSelectedTag={removeFromSelectedTags}
          />
        </div>
        <FormField
          onChange={handleChange}
          value={values.description}
          error={errors.description}
          name="description"
          rows={7}
          label="Project description"
          multiline
          parentclass="mb-4"
        />
        <div className="mt-4 flex justify-end gap-4">
          <Button
            type="submit"
            className="bg-secondary text-white"
            title="Add Project"
          />
        </div>
      </form>
    </div>
  )
}

AddProject.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default AddProject
