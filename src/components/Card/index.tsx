import { Launch } from '../../../spacex-api'

import { format } from 'date-fns'

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
    <S.Title>{launch.name}</S.Title>
    <S.Date>{format(new Date(launch.date), 'MM/dd/yyyy')}</S.Date>
    <S.Text>{`Rocket: ${launch.rocket.name}`}</S.Text>
  </S.Wrapper>
)

export default Card
