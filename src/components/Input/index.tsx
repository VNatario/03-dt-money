import { InputHTMLAttributes, forwardRef } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => <InputContainer {...props} ref={ref} />,
)

Input.displayName = 'Input'
