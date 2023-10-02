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

export const ButtonStyled = styled.button<ButtonContainerProps>`
  border: none;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  background: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: background-color 400ms, color 400ms, border-color 400ms;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-light']};
  }

  padding: ${({ $size }) => sizeVariants[$size]};

  ${({ $size }) =>
    $size === 's' &&
    css`
      font-size: 0.875rem;
    `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${(props) =>
    props.$variant === 'outline' &&
    css`
      background: none;
      border: 1px solid ${props.theme['green-light']};
      color: ${props.theme['green-light']};
      padding: 0.875rem 2rem;

      &:not(:disabled):hover {
        background: ${props.theme.green};
        color: ${props.theme.white};
        border-color: ${props.theme.green};
      }
    `}
`
