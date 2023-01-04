import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { FormField } from ".."
import { ITechStack } from "../../interfaces/project_interface"

interface ISelectTagProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  tags?: ITechStack[]
  selectedTags: ITechStack[]
  handleSelectedTag: (tagId: ITechStack) => void
  removeSelectedTag: (tagId: string) => void
  tagName: string
}

export default function SelectTag(props: ISelectTagProps) {
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
