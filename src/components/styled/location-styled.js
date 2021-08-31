import styled from "styled-components"
import { COLORS } from "./colors"

export const RatingContainer = styled.div`
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CallToActionText = styled.p`
  text-decoration: underline;
`

export const LocationsWrapper = styled.div``

export const Title = styled.h1`
  text-align: center;
`

export const LocationTitle = styled.h4`
  text-align: left;
  font-size: 1.2rem;
  margin: 0;
`

export const LocationTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const LocationTextContent = styled.p`
    text-align: left;
    font-size: 1rem;
`;

export const LocationDate = styled.span`
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

export const LocationsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const LocationContainer = styled.div`
  padding: 1rem;
  font-family: Muli;
`
