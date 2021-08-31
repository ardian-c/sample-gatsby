import styled from "styled-components"
import Slider from "react-slick";
import { BREAK_POINTS, COLORS, SPACING } from "../../../../common/constants"

export const AppDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const AppDownloadContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AppLinks = styled.a`
`

export const FeatureParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
`

export const FeatureParagraphImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 26px 0 10px 0;
`

export const MediaShowcaseContainer = styled.div`
  display: flex;
  cursor: pointer;
  margin: 0 ${SPACING.EXTRA_LARGE};
  flex-direction: row;
  justify-content: space-between;
  overflow-x: scroll;
  @media (max-width: ${BREAK_POINTS.MEDIUM_DEVICE}) {
    img {
      margin: 0 30px;
    }
  }

  @media (max-width: ${BREAK_POINTS.SMALL_DEVICE}) {
    margin 0;
    left: 50%;
    justify-content: space-between;

    img {
      margin: 0 30px;
    }
  }
`
export const SlickSlider = styled(Slider)`
  max-width: 700px;
  margin: auto;
  .slick-dots li button {
    &:before {
      font-size: 10px;
      bottom: 4px;
      color: ${COLORS.INACTIVE_DOTS};
    }
  }
  .slick-dots li.slick-active button {
    &:before {
      font-size: 14px;
      color: ${COLORS.PRIMARY};
    }
  }
`