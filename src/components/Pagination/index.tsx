import { forwardRef } from 'react'

import * as S from './styles'

export interface PaginationProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'ref'
  > {
  totalPages: number
  currentPage: number
  handleChangePage: (page: number) => void
}

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  function PaginationComp(
    { totalPages, currentPage, handleChangePage, ...rest }: PaginationProps,
    ref
  ) {
    return (
      <S.Wrapper ref={ref} {...rest}>
        <S.Button
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          <S.Previus src="/img/arrow.png" />
        </S.Button>
        <S.Label>{currentPage + 1}</S.Label>
        <S.Button
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage + 1 === totalPages}
        >
          <S.Next src="/img/arrow.png" />
        </S.Button>
      </S.Wrapper>
    )
  }
)

export default Pagination
