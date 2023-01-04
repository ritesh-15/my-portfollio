import Image from "next/image"
import React, { ChangeEvent, ReactElement, useState } from "react"
import { useGetAllTechStacksQuery } from "../../../app/services/project/project.service"
import { Button, FormField } from "../../../components"
import Layout from "../../../components/admin/Layout"
import SelectTag from "../../../components/admin/SelectTag"
import { useAuth } from "../../../hooks"
import { ITechStack } from "../../../interfaces/project_interface"
import { NextPageWithLayout } from "../../_app"

const SingleProject: NextPageWithLayout = () => {
  useAuth({ isAuthPage: false, route: "/admin/login" })
  const [selectedTags, setSelectedTags] = useState<ITechStack[]>([])
  const [tagName, setTagName] = useState("")

  const { data: tags } = useGetAllTechStacksQuery("")

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
      <div className="h-[350px] relative mb-6">
        <Image src="/images/project.png" layout="fill" objectFit="cover" />
      </div>

      <form action="">
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Project title" parentclass="mb-4" />
          <FormField label="Git Hub Link" parentclass="mb-4" />
          <FormField label="Deployed Link" parentclass="mb-4" />
          <SelectTag
            tags={tags?.techStacks}
            handleChange={handleChangeTagName}
            tagName={tagName}
            selectedTags={selectedTags}
            handleSelectedTag={handleSelectedTags}
            removeSelectedTag={removeFromSelectedTags}
          />
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
