import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import { INewContact } from "../interfaces/contact_interface"
import { IProjectResponse } from "../interfaces/project_interface"
import { ISkillResponse } from "../interfaces/skill_interface"
import { IPageInfoResponse } from "../interfaces/page_info_interface"

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
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
        title
    }`

  const pageInfoQuery = `*[_type=="pageInfo"]{
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
      name
}`

  const [projects, pageInfo, skills] = await Promise.all([
    client.fetch<IProjectResponse>(projectQuery),
    client.fetch<IPageInfoResponse>(pageInfoQuery),
    client.fetch<ISkillResponse>(skillsQuery),
  ])

  return { projects, pageInfo, skills }
}

export default client
