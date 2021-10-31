import useSWR from 'swr'

import { fetcher } from '../../lib/fetcher'

import * as S from './styles'

const Main = () => {
  const { data, error } = useSWR(
    'https://d346e4el78c5zh.cloudfront.net/launches/upcoming',
    fetcher
  )

  console.log(data, error)

  return <S.Wrapper></S.Wrapper>
}

export default Main
