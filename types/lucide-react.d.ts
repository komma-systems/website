declare module 'lucide-react' {
  import { FC, SVGProps } from 'react'

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string
    color?: string
    strokeWidth?: number | string
  }

  export const ChevronDown: FC<IconProps>
  export const ChevronLeft: FC<IconProps>
  export const ChevronRight: FC<IconProps>
  export const Menu: FC<IconProps>
  export const X: FC<IconProps>
  export const MoreHorizontal: FC<IconProps>
  export const ArrowLeft: FC<IconProps>
  export const ArrowRight: FC<IconProps>
  export const Check: FC<IconProps>
  export const Search: FC<IconProps>
  export const PanelLeft: FC<IconProps>
  export const Linkedin: FC<IconProps>
  // Add other icons as needed
} 