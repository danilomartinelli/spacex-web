import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`

export const Button = styled.button`
  background: none;
  box-shadow: none;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`

export const Previus = styled.img`
  width: 5rem;
  height: auto;
  transform: rotate(-180deg);
`

export const Next = styled.img`
  width: 5rem;
  height: auto;
`
