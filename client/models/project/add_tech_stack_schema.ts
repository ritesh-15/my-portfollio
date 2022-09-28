import * as Yup from "yup";

const addTechStackSchema = Yup.object({
  name: Yup.string().min(2).required("Name is required to add a tech stack!"),
});

export default addTechStackSchema;
