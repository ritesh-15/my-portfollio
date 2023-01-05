import React, { ReactElement } from "react"
import { NextPageWithLayout } from "../../_app"
import Layout from "../../../components/admin/Layout"
import Project from "../../../components/Project"
import { MdEdit } from "react-icons/md"
import { useGetAllProjectsQuery } from "../../../app/services/project/project.service"
import { useAuth } from "../../../hooks"
import Link from "next/link"

const Projects: NextPageWithLayout = () => {
  useAuth({ isAuthPage: false, route: "/admin/login" })
  const { data } = useGetAllProjectsQuery(undefined)

  return (
    <div className="h-full p-4">
      <div className="mb-4">
        <Link
          className="bg-secondary p-2 text-white"
          href="/admin/projects/add-project"
        >
          Create new project
        </Link>
      </div>

      {data?.projects.map((project) => (
        <div className="relative">
          <Project project={project} />

          <div className="absolute top-0 right-0">
            <Link href={`/admin/projects/${project.id}`}>
              <div className="flex bg-white border border-secondary hover:bg-secondary hover:text-white transition-all items-center justify-center w-[50px] h-[50px] text-secondary rounded-full cursor-pointer">
                <MdEdit className="text-xl" />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Projects
