import * as Yup from "yup"

const addProjectSchema = Yup.object({
  title: Yup.string().required("Project title is required!").min(2),
  description: Yup.string()
    .required("Project description  is required!")
    .min(10),
  gitHubLink: Yup.string()
    .required("Git hub link is required!")
    .url("Must be a valid url!"),
  demoLink: Yup.string()
    .required("Git hub link is required!")
    .url("Must be a valid url!"),
})

export default addProjectSchema
