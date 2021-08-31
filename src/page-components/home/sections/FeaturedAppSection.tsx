import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Container, VerticalSpacer, SmallDeviceDisplayNone, DisplaySmallDevice } from "../../../common/elements"
import { AppDescriptionContainer, FeaturedAppWrapper, FeaturedAppImageWrapper, FeaturedAppInnerContainer } from './elements'
import { AppDescription } from '../components'

const query = graphql`
query {
  appFeature: file(relativePath: { eq: "index/app-feature.png" }) {
    childImageSharp {
      fluid(maxWidth: 736, maxHeight: 475) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  appStore: file(relativePath: { eq: "index/app-download/app-store-icon.png" }) {
    childImageSharp {
      fixed(width: 146, height: 46) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  playStore: file(relativePath: { eq: "index/app-download/google-play-icon.png" }) {
    childImageSharp {
      fixed(width: 146, height: 46) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`
export const FeaturedAppSection = () => {
  const { appFeature, appStore, playStore } = useStaticQuery(query)

  return (
    <FeaturedAppWrapper id="FeaturedAppSection">
      <Container>
        <SmallDeviceDisplayNone>
          <VerticalSpacer extraExtraLarge />
        </SmallDeviceDisplayNone>
        <DisplaySmallDevice>
          <VerticalSpacer extraLarge />
        </DisplaySmallDevice>
        <FeaturedAppInnerContainer>
          <AppDescriptionContainer>
            <AppDescription images={{ appStore, playStore }} />
          </AppDescriptionContainer>
          <DisplaySmallDevice>
            <VerticalSpacer extraLarge />
          </DisplaySmallDevice>
          <FeaturedAppImageWrapper>
            <Img fluid={appFeature.childImageSharp.fluid} alt="app feature" />
          </FeaturedAppImageWrapper>
        </FeaturedAppInnerContainer>
        <SmallDeviceDisplayNone>
          <VerticalSpacer extraExtraLarge />
        </SmallDeviceDisplayNone>
      </Container>
    </FeaturedAppWrapper >
  )
}
