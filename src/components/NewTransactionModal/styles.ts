import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;

  inset: 0;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */

  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 3rem 3rem 2.5rem;
  background: ${({ theme }) => theme['main-shape']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
      height: 3.625rem;
      margin-top: 1.5rem;
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: none;
  border: none;
  top: 1.5rem;
  right: 1.5rem;
  color: ${({ theme }) => theme.placeholder};
  cursor: pointer;
  line-height: 0;
`

export const TransactionType = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  $varaint: 'income' | 'outcome'
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  background: ${({ theme }) => theme['secondary-shape']};
  color: ${({ theme }) => theme['base-text']};
  border: none;
  border-radius: 6px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: background-color 400ms;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme['tertiary-shape']};
  }

  svg {
    color: ${({ theme, $varaint }) =>
      $varaint === 'income' ? theme['green-light'] : theme.red};
  }
`
