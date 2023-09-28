import { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react'
import { ButtonContainer, SizeProps, VariantsProps } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string
  icon?: ReactNode
  size?: SizeProps
  variant?: VariantsProps
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ content, icon, size = 'm', variant = 'regular', ...props }, ref) => {
    return (
      <ButtonContainer $size={size} $variant={variant} {...props} ref={ref}>
        {icon}
        {content}
      </ButtonContainer>
    )
  }
)
