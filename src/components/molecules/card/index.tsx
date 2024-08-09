import React from 'react';
import * as S from './styles'; 
import Text from '../../atoms/text';

export interface ICardProps {
  title: string;
  value: string;
  
  
}

export default function Card({title, value }: ICardProps) {
  return (
    <S.CardComponent>
      <Text type='headline-1' color='BACKGROUND'>{title}</Text>
    </S.CardComponent>
  )
}
