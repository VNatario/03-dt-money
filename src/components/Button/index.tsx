import { ReactNode, ButtonHTMLAttributes } from 'react'
import { ButtonContainer, SizeProps, VariantsProps } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string
  icon?: ReactNode
  size?: SizeProps
  variant?: VariantsProps
}

export function Button({
  content,
  icon,
  size = 'm',
  variant = 'regular',
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer $size={size} $variant={variant} {...props}>
      {icon}
      {content}
    </ButtonContainer>
  )
}
