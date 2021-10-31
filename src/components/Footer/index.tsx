import * as S from './styles'

interface IProps {
  text: string
}

export const FOOTER_HEIGHT = 9

const Footer = ({ text }: IProps) => (
  <S.Wrapper height={FOOTER_HEIGHT}>
    <S.Text>{text}</S.Text>
  </S.Wrapper>
)

export default Footer
