import { Launch } from '../../../spacex-api'

import * as S from './styles'

interface IProps {
  launch: Launch
}

const Card = ({ launch }: IProps) => (
  <S.Wrapper>
    <S.Logo
      loading="lazy"
      alt={launch.name}
      src={launch.logo.large || '/img/placeholder.png'}
    />
  </S.Wrapper>
)

export default Card
