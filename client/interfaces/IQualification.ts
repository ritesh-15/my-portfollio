export type IQualificationResponse = IQualification[]

interface IQualification {
  _id: string
  title: string
  description: IDescription[]
  date: string
  isEducation?: boolean
}

interface IDescription {
  children: IDescriptionChildren[]
}

interface IDescriptionChildren {
  text: string
}
