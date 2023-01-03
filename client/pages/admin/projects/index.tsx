import React, { ReactElement } from "react"
import { NextPageWithLayout } from "../../_app"
import Layout from "../../../components/admin/Layout"
import Project from "../../../components/Project"
import { MdEdit } from "react-icons/md"
import { useRouter } from "next/router"

const style = {
  display: "flex",
  flexDirection: "column",
  m: "auto",
  width: "95%",
}

const Projects: NextPageWithLayout = () => {
  const router = useRouter()
  // useAuth({ isAuthPage: false, route: "/admin/login" });
  // const { data } = useGetAllProjectsQuery(undefined)

  return (
    <div className="h-full p-4">
      <div className="relative">
        <Project />

        <div className="absolute top-0 right-0">
          <div
            className="flex bg-white border border-secondary hover:bg-secondary hover:text-white transition-all items-center justify-center w-[50px] h-[50px] text-secondary rounded-full cursor-pointer"
            onClick={() => router.push("/admin/projects/45")}
          >
            <MdEdit className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Projects
