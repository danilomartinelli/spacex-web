import * as S from './styles'

interface IProps {
  title: string
}

const Header = ({ title }: IProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Header
