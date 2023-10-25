import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import { INewContact } from "../interfaces/contact_interface"
import { IProjectResponse } from "../interfaces/project_interface"
import { ISkillResponse } from "../interfaces/skill_interface"
import { IQualificationResponse } from "../interfaces/IQualification"
import { IPageInfoResponse } from "../interfaces/page_info_interface"

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: "v2021-03-25",
})

export async function createNewContact(contact: INewContact) {
  return await client.create({
    _type: "contact",
    ...contact,
  })
}

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getData() {
  const projectQuery = `*[_type=="project"] {
        _id,
        demoLink,
        gitHubLink,
        description,
        image,
        tags[]->{name,image},
        title,
        videoLink
    }`

  const personalInfo = `*[_type=="pageInfo"]{
    about,
    contact,
    hero,
    image,
    name,
    email
}`

  const skillsQuery = `*[_type=="skills"] {
      _id,
      image,
      name,
      stack
}`

  const qualificationQuery = `*[_type=="qualification"] | order(_createdAt asc) {
  _id,
  title,
  description,
  date,
  isEducation
}`

  const [projects, skills, qualification, info] = await Promise.all([
    client.fetch<IProjectResponse>(projectQuery),
    client.fetch<ISkillResponse>(skillsQuery),
    client.fetch<IQualificationResponse>(qualificationQuery),
    client.fetch<IPageInfoResponse>(personalInfo),
  ])

  return { projects, skills, qualification, info }
}

export default client
