import styled, { css } from 'styled-components'

export type VariantsProps = 'outline' | 'regular'
export type SizeProps = 's' | 'm' | 'lg'

interface ButtonContainerProps {
  $variant: VariantsProps
  $size: SizeProps
}

const sizeVariants = {
  s: '0.5rem 1rem',
  m: '0.75rem 1.25rem',
  lg: '1rem 2rem',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: none;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  transition: 400ms;
  background: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  &:hover {
    background: ${({ theme }) => theme['green-light']};
  }

  padding: ${({ $size }) => sizeVariants[$size]};

  ${({ $size }) =>
    $size === 's' &&
    css`
      font-size: 0.875rem;
    `}

  ${(props) =>
    props.$variant === 'outline' &&
    css`
      background: none;
      border: 1px solid ${props.theme['green-light']};
      color: ${props.theme['green-light']};

      &:hover {
        background: ${props.theme.green};
        color: ${props.theme.white};
        border-color: ${props.theme.green};
      }
    `}
`
