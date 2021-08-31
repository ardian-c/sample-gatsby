import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import useContent from "../../../hooks/useContent";
import { Container, VerticalSpacer, TitleSecondary } from "../../../common/elements"
import { BikeFeaturesContainer, FeaturesContainer } from './elements'
import { FeatureParagraph } from "../components"

const query = graphql`
query {
  improve: file(relativePath: { eq: "index/bike-features/improve.png" }) {
    childImageSharp {
      fixed(width: 64, height: 64) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  quality: file(relativePath: { eq: "index/bike-features/quality.png" }) {
    childImageSharp {
      fixed(width: 64, height: 64) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  topHits: file(relativePath: { eq: "index/bike-features/top-hits.png" }) {
    childImageSharp {
      fixed(width: 64, height: 64) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`
export const BikeFeaturesSection = () => {
  const { content } = useContent("home");
  const sectionKey = "bikeFeatureSection";

  const { improve, quality, topHits } = useStaticQuery(query)

  return (
    <Container>
      <VerticalSpacer large />
      <BikeFeaturesContainer>
        <TitleSecondary>{content([sectionKey, "title"])}</TitleSecondary>
        <FeaturesContainer>
          <FeatureParagraph image={improve} contentKey="firstParagraph" />
          <FeatureParagraph image={quality} contentKey="secondParagraph" />
          <FeatureParagraph image={topHits} contentKey="thirdParagraph" />
        </FeaturesContainer>
      </BikeFeaturesContainer>
      <VerticalSpacer large />
    </Container>
  )
}
