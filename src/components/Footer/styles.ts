import styled from 'styled-components'

export const Wrapper = styled.header<{ height: number }>`
  background-color: #06092b;
  width: 100%;
  height: ${({ height }) => `${height}rem`};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled.span`
  font-size: 2.5rem;
  color: #fff;
`
