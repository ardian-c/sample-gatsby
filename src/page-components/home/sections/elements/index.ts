import styled from "styled-components"
import { BREAK_POINTS, COLORS, FONT_FAMILY, FONT_SIZES, SPACING } from "../../../../common/constants"
import { TitlePrimary } from "../../../../common/elements"

export const SecondaryBackgroundWrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.BACKGROUND_SECONDARY};
`
export const ButtonWrapper = styled.div`
  display: flex;
  margin: ${SPACING.EXTRA_LARGE} 0 0 0;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
`
export const HeaderContainer = styled.div`
  padding: 0;
  height: 100%;
  position: relative;
  z-index: 2;
`

export const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1.5rem 5rem;
  text-align: center;
  z-index: 2;
  @media (max-width: ${BREAK_POINTS.SMALL_DEVICE}) {
    padding: 1rem 1.4rem;
  }
`

export const BikeFeaturesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 20px 0;
  @media (max-width: ${BREAK_POINTS.SMALL_DEVICE}) {
    margin: 0;
  }
`

export const FeaturesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  @media (max-width: ${BREAK_POINTS.SMALL_DEVICE}) {
    flex-direction: column;
  }
`

export const FeaturedAppWrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.BACKGROUND_TERTIARY};
`
export const FeaturedAppInnerContainer = styled.div`
  display: flex;
  margin: 0 ${SPACING.LARGE};
  @media (max-width: ${BREAK_POINTS.SMALL_DEVICE}) {
    flex-direction: column-reverse;
    margin: 0;
  }
`
export const FeaturedAppImageWrapper = styled.div`
  padding: 0 ${SPACING.MEDIUM};
  flex: 6;
`
export const AppDescriptionContainer = styled.div`
  padding: 0 ${SPACING.EXTRA_EXTRA_LARGE} 0 0;
  flex: 3;
  @media (max-width: ${BREAK_POINTS.SMALL_DEVICE}) {
    padding: 0;
    justify-content: center;
  }
`

export const DescriptionMain = styled.h3`
  font-size: ${FONT_SIZES.DESCRIPTION_MAIN};
  font-weight: 400;
  font-family: ${FONT_FAMILY};
  font-style: normal;
  font-stretch: normal;
  color: ${COLORS.SECTION_TEXT};
  line-height: 32px;
  letter-spacing: normal;
  @media (max-width: ${BREAK_POINTS.SMALL_DEVICE}) {
    flex-direction: column;
    font-size: ${FONT_SIZES.DESCRIPTION_MAIN_MOBILE};
    line-height: 1;
  }
`
export const TestimonialText = styled(TitlePrimary)`
  font-size: ${FONT_SIZES.QUOTED_TESTIMONIAL};
  font-weight: 200;
  text-align: center;
`
export const TestimonialWrapper = styled.div`
  padding: 0 40px;
  max-width: 700px;
`
export const TestimonialSliderWrapper = styled.div`
`

export const FinancingText = styled.p`
  font-size: ${FONT_SIZES.TINY_TEXT};
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: ${COLORS.PRIMARY_TEXT};
`;

export const Title = styled.h1`
  font-size: ${FONT_SIZES.HEADER_MAIN};
  font-weight: 500;
  font-family: ${FONT_FAMILY};
  font-style: normal;
  font-stretch: normal;
  color: ${COLORS.SECTION_TEXT};
  line-height: 2;
  letter-spacing: normal;
  @media (max-width: ${BREAK_POINTS.SMALL_DEVICE}) {
    flex-direction: column;
    font-size: ${FONT_SIZES.HEADER_MAIN_MOBILE};
    line-height: 1.4;
  }
`

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${COLORS.BACKGROUND};
  opacity: 0.3;
  z-index: 1;
`
