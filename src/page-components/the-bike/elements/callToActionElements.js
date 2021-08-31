import styled from "styled-components"
import { COLORS, FONT_FAMILY } from "../../../common/constants"

const SECONDARY_FONT_COLOR = "#000000"
const MEMBERSHIP_TEXT_PADDING = "0.25rem"

export const BreadContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

export const DeliveryText = styled.p`
  font-family: ${FONT_FAMILY};
`

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
  }
`

export const ProductDetail = styled.div`
  font-family: ${FONT_FAMILY};
  color: ${COLORS.MESSAGE_TEXT};
  text-transform: uppercase;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 10px 0;
  text-align: center;
  display: flex;
  flex-direction: row;
`

export const ImageLogo = styled.img`
  height: 40px;
  margin: 15px 0;
`

export const InformationPage = styled.div`
  display: flex;
  height: 100%;
  margin: 0 4.5rem;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: space-around;
  @media (max-width: 768px) {
    align-items: center;
    padding: 15px 0;
    margin: 0 1.5rem;
  }
`

export const MembershipOptionalText = styled.p`
  stretch: normal;
  style: normal;
  font-family: ${FONT_FAMILY};
  font-size: 1.2rem;
  padding: 0 0 ${MEMBERSHIP_TEXT_PADDING} 0;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  color: ${SECONDARY_FONT_COLOR};
  margin: 0;
`
