import React, { useState } from "react"
import useContent from "../../../hooks/useContent"
import {
  Container,
  Heading,
  HeadingContainer,
  PeletonComparisonContainer,
  PeletonComparisonButton,
  PeletonText,
  PeletonComparisonTable,
  PeletonComparisonHeader,
  PeletonComparisonHeaderCell,
  PeletonComparisonRow,
  PeletonComparisonCell,
} from "../elements/bikeComparisonSection"
import {
  UpArrow,
  DownArrow,
  TinyCheck,
  TinyClose,
} from "../elements/iconElements"

const BikeComparisonSection = () => {
  const { content } = useContent("theBike")
  const [comparisonOpen, setComparisonOpen] = useState(false)

  const toggleComparison = () => setComparisonOpen((prevState) => !prevState)

  const displayComparisonValue = (value) => {
    if (typeof value === "boolean") {
      if (value) {
        return <TinyCheck />
      }
      return <TinyClose />
    }
    return value
  }

  const generatePeletonComparisonTable = () => {
    const tableElements = [{ stryde: "Stryde", peleton: "Peloton" }].concat(
      content(["reviewBikeSection", "peletonComparison"])
    )
    return tableElements.map((rowData, index) => {
      if (!index) {
        // 0
        return (
          <PeletonComparisonHeader>
            <PeletonComparisonHeaderCell width="70%" />
            <PeletonComparisonHeaderCell width="15%">
              {rowData.stryde}
            </PeletonComparisonHeaderCell>
            <PeletonComparisonHeaderCell width="15%">
              {rowData.peleton}
            </PeletonComparisonHeaderCell>
          </PeletonComparisonHeader>
        )
      }
      return (
        <PeletonComparisonRow>
          <PeletonComparisonCell width="70%" alignLeft leftPadding>
            {rowData.title}
          </PeletonComparisonCell>
          <PeletonComparisonCell width="15%" dark>
            {displayComparisonValue(rowData.stryde)}
          </PeletonComparisonCell>
          <PeletonComparisonCell width="15%">
            {displayComparisonValue(rowData.peleton)}
          </PeletonComparisonCell>
        </PeletonComparisonRow>
      )
    })
  }
  return (
    <section className="review-bike-section">
      <Container>
        <HeadingContainer>
          <Heading>
            {content(["reviewBikeSection", "title"])[0]} <br />
            {content(["reviewBikeSection", "title"])[1]} <br />
            {content(["reviewBikeSection", "title"])[2]} <br />
          </Heading>
        </HeadingContainer>

        <PeletonComparisonContainer>
          <PeletonComparisonButton onClick={toggleComparison}>
            {!comparisonOpen && <UpArrow />}
            {comparisonOpen && <DownArrow />}
            <PeletonText>
              {content(["reviewBikeSection", "compareButton"])}
            </PeletonText>
          </PeletonComparisonButton>
          {comparisonOpen && (
            <PeletonComparisonTable>
              {generatePeletonComparisonTable()}
            </PeletonComparisonTable>
          )}
        </PeletonComparisonContainer>
      </Container>
    </section>
  )
}

export default BikeComparisonSection
