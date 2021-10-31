import useSWR from 'swr'

import { fetcher } from '../../lib/fetcher'

import { useState } from 'react'

import Select from 'react-select'
import ReactLoading from 'react-loading'

import * as S from './styles'

import { LaunchResponse } from '../../../spacex-api'

type Option = {
  value: string
  label: string
}

const options: Option[] = [
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'past', label: 'Past' },
  { value: 'latest', label: 'Latest' },
  { value: 'next', label: 'Next' }
]

const Main = () => {
  const [filter, setFilter] = useState<Option | null>(options[0])

  const { data, error } = useSWR<LaunchResponse>(
    `https://d346e4el78c5zh.cloudfront.net/launches/${
      filter?.value ?? 'upcoming'
    }`,
    fetcher
  )

  return (
    <S.Wrapper>
      <S.FilterRow>
        <Select<Option> value={filter} onChange={setFilter} options={options} />
      </S.FilterRow>
      {!data && !error && (
        <S.LoadingWrapper>
          <ReactLoading type="spin" color="#06092b" width={100} />
        </S.LoadingWrapper>
      )}
    </S.Wrapper>
  )
}

export default Main
