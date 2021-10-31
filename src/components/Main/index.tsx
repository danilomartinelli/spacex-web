import useSWR from 'swr'

import { fetcher } from '../../lib/fetcher'

import { useEffect, useState } from 'react'

import Select from 'react-select'
import ReactLoading from 'react-loading'

import * as S from './styles'

import { LaunchResponse } from '../../../spacex-api'
import Pagination from '../Pagination'

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

export const LIMIT = 10

const Main = () => {
  const [filter, setFilter] = useState<Option | null>(options[0])
  const [offset, setOffset] = useState(0)

  const { data, error } = useSWR<LaunchResponse>(
    `https://d346e4el78c5zh.cloudfront.net/launches/${
      filter?.value ?? 'upcoming'
    }?limit=${LIMIT}&offset=${offset}`,
    fetcher
  )

  const handleChangePage = (page: number) => {
    setOffset(page * LIMIT)
  }

  useEffect(() => {
    setOffset(0)
  }, [filter])

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
      {data && (
        <S.ResultWrapper>
          <S.PaginationWrapper>
            <Pagination
              currentPage={offset / LIMIT}
              totalPages={Math.floor((data?.total ?? 0) / LIMIT)}
              handleChangePage={handleChangePage}
            />
          </S.PaginationWrapper>
        </S.ResultWrapper>
      )}
    </S.Wrapper>
  )
}

export default Main
