import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const FilterRow = styled.div`
  max-width: 20rem;
  width: 100%;
  margin: 2rem 2rem 0 auto;
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

export const PaginationWrapper = styled.div`
  margin: 4rem auto 4rem auto;
  width: fit-content;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 2fr));
  gap: 2rem 2rem;
`
