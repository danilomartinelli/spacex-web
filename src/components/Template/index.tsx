import { FOOTER_HEIGHT } from '../Footer'
import { HEADER_HEIGHT } from '../Header'
import * as S from './styles'

interface IProps {
  header: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}

const Template = ({ header, footer, children }: IProps) => (
  <S.Wrapper>
    {header}
    <S.Main gap={HEADER_HEIGHT + FOOTER_HEIGHT}>{children}</S.Main>
    {footer}
  </S.Wrapper>
)

export default Template
