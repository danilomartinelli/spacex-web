import * as S from './styles'

interface IProps {
  header: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}

const Template = ({ header, footer, children }: IProps) => (
  <S.Wrapper>
    {header}
    {children}
    {footer}
  </S.Wrapper>
)

export default Template
