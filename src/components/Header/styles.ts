import styled from 'styled-components'

export const Wrapper = styled.header<{ height: number }>`
  background-color: #06092b;
  width: 100%;
  display: flex;
  height: ${({ height }) => `${height}rem`};
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
`
