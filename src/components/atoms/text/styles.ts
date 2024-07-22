import styled, { css } from 'styled-components'
import { IText } from './index'

export const typeMapper = {
  'headline-1': {
    as: 'h1',
    textFormat: css`
      font-family: ${props => props.theme.FONTS.HEADING};
      font-weight: ${props => props.theme.FONTS.FONT_WEIGHTS.BOLD};
      font-size: 32px;
      line-height: 80px;
      letter-spacing: -1.5px;
      text-align: left;
    `
  },
  'headline-2': {
    as: 'h2',
    textFormat: css`
      font-family: ${props => props.theme.FONTS.BODY};
      font-weight: ${props => props.theme.FONTS.FONT_WEIGHTS.BOLD};
      font-size: 40px;
      line-height: 80px;
      letter-spacing: -1.5px;
      text-align: left;
    `
  },
  'subtitle-1': {
    as: 'p',
    textFormat: css`
      font-family: ${props => props.theme.FONTS.BODY};
      font-weight: ${props => props.theme.FONTS.FONT_WEIGHTS.MEDIUM};
      font-size: 16px;
      line-height: 18.75px;
      text-align: left;
    `
  },
  'body-1': {
    as: 'p',
    textFormat: css`
      font-family: ${props => props.theme.FONTS.BODY};
      font-weight: ${props => props.theme.FONTS.FONT_WEIGHTS.REGULAR};
      font-size: 32px;
      line-height: 80px;
      letter-spacing: -1.5px;
      text-align: left;
    `
  }
}

export const TextComponent = styled.span.attrs<IText>(({ type }) => ({
  as: typeMapper[type]?.as
}))<IText>`
  ${({ type }) => typeMapper[type]?.textFormat}
  color: ${({ color, theme }) =>
    color ? theme.COLORS[color] : theme.COLORS.PRIMARY};
`
