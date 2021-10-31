import * as S from './styles'

interface IProps {
  title: string
}

export const HEADER_HEIGHT = 9

const Header = ({ title }: IProps) => (
  <S.Wrapper height={HEADER_HEIGHT}>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Header
