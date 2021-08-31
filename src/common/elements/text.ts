import styled from "styled-components"
import { BREAK_POINTS, COLORS, FONT_FAMILY, FONT_SIZES, SPACING } from "../../common/constants"

export const CallToActionTertiary = styled.h4`
  text-transform: uppercase;
  color: ${COLORS.PRIMARY};
  margin: 0 0 ${SPACING.LARGE} 0;
  font-weight: 900;
  font-size: ${FONT_SIZES.CALL_TO_ACTION_TERTIARY};
  font-family: ${FONT_FAMILY};
  @media (max-width: ${BREAK_POINTS.SMALL_DEVICE}) {
    text-align: center;
  }
`

export const EmailLink = styled.a`
  color: ${COLORS.PRIMARY};
  font-size: 20px;
  text-decoration: none;
  padding-bottom: 20px;
  :hover {
    color: ${COLORS.PRIMARY};
  }
`

export const ParagraphTitle = styled.h3`
text-align: center;
font-weight: 700;
font-size: ${FONT_SIZES.PARAGRAPH_TITLE};
font-family: ${FONT_FAMILY}
`

export const TitlePrimary = styled.h1`
  color: ${COLORS.PRIMARY_TEXT};
  font-size: ${FONT_SIZES.TITLE_PRIMARY};
  font-family: ${FONT_FAMILY}
`
export const TitleSecondary = styled.h2`
  text-align: center;
  font-size: ${FONT_SIZES.TITLE_SECONDARY};
  font-family: ${FONT_FAMILY}
  @media (max-width: ${BREAK_POINTS.SMALL_DEVICE}) {
    font-size: ${FONT_SIZES.TITLE_SECONDARY_MOBILE};
  }
`

interface TitleTertiaryProps {
  uppercase?: boolean;
  center?: boolean;
}
export const TitleTertiary = styled.h3<TitleTertiaryProps>`
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'capitalize'};
  margin: 0 0 ${SPACING.LARGE} 0;
  text-align: ${({ center }) => center ? 'center' : 'left'};
  font-weight: 900;
  font-size: ${FONT_SIZES.TITLE_TERTIARY};
  font-family: ${FONT_FAMILY}
`
export const TitleTertiaryInverse = styled(TitleTertiary)`
  color: ${COLORS.TITLE_COLOR_INVERSE};
  @media (max-width: ${BREAK_POINTS.SMALL_DEVICE}) {
    text-align: center;
  }
`

interface ParagraphSecondaryProps {
  center?: boolean
}
export const ParagraphSecondary = styled.p<ParagraphSecondaryProps>`
font-family: ${FONT_FAMILY};
font-weight: 400;
color: ${COLORS.PARAGRAPH_TEXT};
margin-bottom: 1.5rem;
text-align: ${({ center }) => center ? 'center' : 'left'};
font-size: ${FONT_SIZES.PARAGRAPH_SECONDARY};
@media (max-width: ${BREAK_POINTS.MEDIUM_DEVICE}) {
  text-align: center;
`
export const ParagraphSecondaryInverse = styled(ParagraphSecondary)`
color: ${COLORS.PARAGRAPH_TEXT_INVERSE};
`
export const TinyText = styled.p`
  margin: 0;
  colors: ${COLORS.PRIMARY_TEXT};
  font-size: ${FONT_SIZES.TINY_TEXT};
  font-family: ${FONT_FAMILY};
  opacity: 0.5;
`
