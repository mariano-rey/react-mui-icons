import { Icon, IconProps } from '@mui/material'
import { MuiIconType } from './types'

interface MuiIconProps extends IconProps {
  icon: MuiIconType
}

export default function MuiIcon({ icon, ...rest }: MuiIconProps) {
  return <Icon {...rest}>{icon}</Icon>
}
