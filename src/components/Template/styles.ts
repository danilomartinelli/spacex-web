import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Main = styled.main<{ gap: number }>`
  min-height: ${({ gap }) => `calc(100vh - ${gap}rem)`};
`
