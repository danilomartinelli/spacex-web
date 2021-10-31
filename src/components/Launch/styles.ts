import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ResultWrapper = styled.div`
  margin-top: 2rem;
  padding: 0 2rem;
`

export const BackButton = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  color: #06092b;
  font-size: 1.6rem;
  cursor: pointer;
  margin-bottom: 2rem;
`
