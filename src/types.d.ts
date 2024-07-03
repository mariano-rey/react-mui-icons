import { ICONS } from './ICONS'

export type MuiIconFilled = (typeof ICONS)[number]
export type MuiOutlinedIcon = `${MuiIconFilled}_outlined`
export type MuiRoundedIcon = `${MuiIconFilled}_rounded`
export type MuiTwoToneIcon = `${MuiIconFilled}_two_tone`
export type MuiSharpIcon = `${MuiIconFilled}_sharp`

export type MuiIconType =
  | MuiIconFilled
  | MuiOutlinedIcon
  | MuiRoundedIcon
  | MuiTwoToneIcon
  | MuiSharpIcon
