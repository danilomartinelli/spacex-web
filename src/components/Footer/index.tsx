import * as S from './styles'

interface IProps {
  text: string
}

const Footer = ({ text }: IProps) => (
  <S.Wrapper>
    <S.Text>{text}</S.Text>
  </S.Wrapper>
)

export default Footer
