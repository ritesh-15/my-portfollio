import Image from "next/image"
import React, { ReactElement } from "react"
import { Button, FormField } from "../../../components"
import Layout from "../../../components/admin/Layout"
import { NextPageWithLayout } from "../../_app"

const SingleProject: NextPageWithLayout = () => {
  // useAuth({ isAuthPage: false, route: "/admin/login" })

  return (
    <div className="p-4">
      <div className="h-[350px] relative mb-6">
        <Image src="/images/project.png" layout="fill" objectFit="cover" />
      </div>

      <form action="">
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Project title" parentclass="mb-4" />
          <FormField label="Git Hub Link" parentclass="mb-4" />
          <FormField label="Deployed Link" parentclass="mb-4" />
        </div>
        <FormField
          rows={7}
          label="Project description"
          multiline
          parentclass="mb-4"
        />
        <div className="mt-4 flex justify-end gap-4">
          <Button className="bg-secondary text-white" title="Update" />
          <Button
            className="bg-white text-secondary border border-secondary"
            title="Remove"
          />
        </div>
      </form>
    </div>
  )
}

SingleProject.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default SingleProject
