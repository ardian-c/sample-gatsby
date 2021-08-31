import styled from "styled-components"
import { COLORS, SIZE, FONT_FAMILY } from "../../../common/constants"

export const Heading = styled.h1`
  color: ${COLORS.SECTION_TEXT};
  font-family: ${FONT_FAMILY};
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`

export const HeroHeading = styled.h1`
  color: ${COLORS.SECTION_TEXT};
  font-family: ${FONT_FAMILY};
  text-align: center;
`;

export const HeroSubHeading = styled.h4`
  color: ${COLORS.SECTION_TEXT};
  font-family: ${FONT_FAMILY};
  text-align: center;
  font-weight: 500;
`;

export const HeadingWrapper = styled.div`
  padding-top: 25%;
`;

export const HeadingContainer = styled.div``

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 3rem 0 2.2rem 0;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  padding-right: 15px;
  padding-left: 15px;
`
export const PeletonComparisonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PeletonComparisonButton = styled.div`
  text-align: center;
  cursor: pointer;
`

export const PeletonText = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${COLORS.SECTION_TEXT};
  padding: 10px 0 0 0;
  text-align: center;
  text-transform: uppercase;
  font-family: ${FONT_FAMILY};
`

export const PeletonComparisonTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  @media (min-width: 768px) {
    width: 450px;
  }
`

export const PeletonComparisonHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const PeletonComparisonRow = styled.div`
  display: flex;
  width: 100%;
  border-radius: 4px;
  margin: 1px 0;
  overflow: hidden;
`

export const PeletonComparisonCell = styled.span`
  width: ${(props) => props.width};
  text-align: ${(props) => (props.alignLeft ? "left" : "center")};
  font-size: 0.7rem;
  font-family: ${FONT_FAMILY};
  padding: 4px 4px;
  ${(props) => (props.leftPadding ? "padding-left: 10px;" : "")}
  color: ${COLORS.SECTION_TEXT};
  background: ${(props) =>
    props.dark ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.07)"};
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`
export const PeletonComparisonHeaderCell = styled.span`
  width: ${(props) => props.width};
  text-align: center;
  font-weight: 500;
  padding: 4px 0;
  font-size: 0.6rem;
  text-transform: uppercase;
  color: ${COLORS.SECTION_TEXT};
  font-family: ${FONT_FAMILY};
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`
