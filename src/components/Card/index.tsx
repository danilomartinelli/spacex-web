import { Launch } from '../../../spacex-api'

import { format } from 'date-fns'

import { showImage } from '../../lib/abtest'

import * as S from './styles'

interface IProps {
  launch: Launch
  onClick?: () => void
}

const Card = ({ launch, onClick }: IProps) => (
  <S.Wrapper onClick={onClick} isButton={!!onClick}>
    {showImage.isAvailable() && (
      <S.Logo
        loading="lazy"
        alt={launch.name}
        src={launch.logo.large || '/img/placeholder.png'}
      />
    )}
    <S.Title>{launch.name}</S.Title>
    <S.Date>{format(new Date(launch.date), 'MM/dd/yyyy')}</S.Date>
    <S.Text>{`Rocket: ${launch.rocket.name}`}</S.Text>
  </S.Wrapper>
)

export default Card
