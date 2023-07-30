export type ISkillResponse = ISkill[]

export interface ISkill {
  _id: string
  image: Image
  name: string
  stack: string
}

export interface Image {
  _type: string
  asset: Asset
}

export interface Asset {
  _ref: string
  _type: string
}
