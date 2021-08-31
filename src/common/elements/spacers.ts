import styled from "styled-components"
import { BREAK_POINTS, SPACING } from "../constants"

interface convertPropToPxProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  extraLarge?: boolean;
  extraExtraLarge?: boolean;
}
const convertPropToPx = (props: convertPropToPxProps) => {
  if (props.small) {
    return SPACING.SMALL;
  }
  if (props.medium) {
    return SPACING.MEDIUM;
  }
  if (props.large) {
    return SPACING.LARGE;
  }
  if (props.extraLarge) {
    return SPACING.EXTRA_LARGE;
  }
  if (props.extraExtraLarge) {
    return SPACING.EXTRA_EXTRA_LARGE;
  }
  return SPACING.MEDIUM;
}

export const HorizontalSpacer = styled.span<convertPropToPxProps>`
  display: block;
  width: ${(props) => convertPropToPx(props)};
`
export const VerticalSpacer = styled.span<convertPropToPxProps>`
  display: block;
  height: ${(props) => convertPropToPx(props)};
`
