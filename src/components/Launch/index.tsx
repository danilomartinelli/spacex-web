import { useEffect } from 'react'
import { useRouter } from 'next/router'

import useSWR from 'swr'

import { fetcher } from '../../lib/fetcher'

import ReactLoading from 'react-loading'

import * as S from './styles'

import { LaunchResponse } from '../../../spacex-api'

import { showImage } from '../../lib/abtest'

import Card from '../Card'

const Launch = () => {
  const { query, push } = useRouter()

  const { data: launch, error } = useSWR<LaunchResponse>(
    `https://d346e4el78c5zh.cloudfront.net/launches/${query.id}`,
    fetcher
  )

  useEffect(() => {
    if (window && typeof window !== 'undefined') {
      window.setTimeout(() => {
        import('amplitude-js').then((amplitude) => {
          amplitude.getInstance().logEvent('Launch Page', {
            name: showImage.name,
            isAvailable: showImage.isAvailable()
          })
        })
      }, 0)
    }
  }, [])

  return (
    <S.Wrapper>
      {!launch && !error && (
        <S.LoadingWrapper>
          <ReactLoading type="spin" color="#06092b" width={100} />
        </S.LoadingWrapper>
      )}
      {launch && (
        <S.ResultWrapper>
          <S.BackButton onClick={() => push('/')}>{'< Back'}</S.BackButton>
          <Card launch={launch.data[0]} />
        </S.ResultWrapper>
      )}
    </S.Wrapper>
  )
}

export default Launch
