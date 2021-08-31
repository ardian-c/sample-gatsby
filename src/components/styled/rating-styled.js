import styled from "styled-components"
import { PRIMARY, COLORS } from "./colors"

const SECONDARY_FONT_COLOR = "#000000"
const FONT_FAMILY = "Muli"

export const Star = styled.i`
  color: ${PRIMARY};
  margin: 0 2px;
  font-size: 0.95rem;
`

export const RatingContainer = styled.div`
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RatingNumber = styled.p`
  font-weight: bolder !important;
  color: ${SECONDARY_FONT_COLOR};
  text-align: center;
  font-size: 0.8rem;
  font-family: ${FONT_FAMILY};
  padding: 0;
  margin: 0 0 0 0.6rem !important;
  :hover {
    text-decoration: underline;
  }
`

export const OveralRating = styled.div`
  margin: 1rem 0 0 0;
  cursor: pointer;
  display: inline-block;
`

export const CallToActionText = styled.p`
  text-decoration: underline;
`

export const ReviewsWrapper = styled.div``

export const Title = styled.h1`
  text-align: center;
`

export const ReviewTitle = styled.h4`
  text-align: Left;
  font-size: 1.2rem;
  margin: 0;
`

export const ReviewTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const ReviewDate = styled.span`
  font-size: 0.8rem;
  color: ${COLORS.SECONDARY_TEXT};
`

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const Content = styled.p`
  font-size: 0.8rem;
`

export const ReviewsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ReviewContainer = styled.div`
  padding: 1rem;
  font-family: Muli;
`
