import Image from "next/image"
import React, { ChangeEvent, ReactElement, useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { useGetAllTechStacksQuery } from "../../../app/services/project/project.service"
import { Button, FormField } from "../../../components"
import Layout from "../../../components/admin/Layout"
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

interface ISelectTagProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  tags?: ITechStack[]
  selectedTags: ITechStack[]
  handleSelectedTag: (tagId: ITechStack) => void
  removeSelectedTag: (tagId: string) => void
  tagName: string
}

function SelectTag(props: ISelectTagProps) {
  const {
    handleChange,
    tags,
    tagName,
    selectedTags,
    handleSelectedTag,
    removeSelectedTag,
  } = props

  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <FormField onChange={handleChange} label="Tag name" parentclass="mb-4" />

      {selectedTags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mb-4">
          {selectedTags.map((tag) => (
            <div className="border bg-white border-gray-300 w-fit px-2 flex items-center justify-center py-2 rounded-lg gap-1">
              <Image src={tag.image.url} width={25} height={25} alt="" />
              <span className="font-opensans font-light text-sm">
                {tag.name}
              </span>
              <AiOutlineClose
                className="cursor-pointer"
                onClick={() => removeSelectedTag(tag.id)}
              />
            </div>
          ))}
        </div>
      )}

      {tagName !== "" && (
        <div className="absolute bg-white shadow-lg w-full left-0 right-0 z-25 px-4 py-2 rounded-md">
          <div className="flex items-center gap-2 flex-wrap mb-4">
            {tags?.map((tag) => {
              const currentTagName = tag.name.toLowerCase()
              if (currentTagName.includes(tagName.toLowerCase())) {
                return (
                  <div
                    onClick={() => {
                      handleSelectedTag(tag)
                    }}
                    className="cursor-pointer hover:bg-gray-100   border bg-white border-gray-300 w-fit px-2 flex items-center justify-center py-2 rounded-lg gap-1"
                  >
                    <Image src={tag.image.url} width={25} height={25} alt="" />
                    <span className="font-opensans font-light text-sm">
                      {tag.name}
                    </span>
                  </div>
                )
              }
            })}
          </div>
        </div>
      )}
    </div>
  )
}

SingleProject.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default SingleProject
