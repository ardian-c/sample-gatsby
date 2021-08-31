import React from 'react'
import Layout from '../components/layout'
import "../styles/portal.scss"

import HelmetEx from '../components/helmet-ex'
import useContent from '../hooks/useContent'
import { Container, VerticalSpacer } from '../common/elements'
import { HeadingWrapper, HeroHeading, HeroSubHeading } from '../page-components/the-bike/elements/bikeComparisonSection'
import { MainSection } from '../components/styled/common-styled'
import { Title, LocationsContainer, LocationContainer, LocationTitleSection, LocationTextContent, LocationTitle, TopSection } from '../components/styled/location-styled'

const pageName = "tryStryde"

const TryStryde = () => {
  const { content } = useContent(pageName);

  return (
      <div>
          <Layout>
            <HelmetEx>
              <div metadata="title">{content(["meta", "title"])}</div>
              <div metadata="keywords">{content(["meta", "keywords"])}</div>
              <div metadata="path">{content(["meta", "faq"])}</div>
              <div metadata="description">{content(["meta", "description"])}</div>
            </HelmetEx>
            <section className="try-stryde-bg-section">
                <Container>
                  <HeadingWrapper>
                    <HeroHeading>
                    {content(["title"])[0]} <br />
                    </HeroHeading>
                    <HeroSubHeading>{content(["title"])[1]} <br />
                    {content(["title"])[2]} <br /></HeroSubHeading>
                  </HeadingWrapper>
                </Container>
            </section>

            <section className="try-stryde-locations">
                <MainSection>
                  <Container>
                    <VerticalSpacer extraLarge />
                    <Title>Locations</Title>
                    <VerticalSpacer extraLarge />
                    <LocationsContainer>
                    {(content(["locations"]) || []).map((location, index) => (
                      <LocationContainer key={index}>
                        <TopSection>
                          <LocationTitleSection>
                            <LocationTitle>{location.title}</LocationTitle>
                            <LocationTextContent>{location.address}</LocationTextContent>
                            <LocationTextContent>{location.city}</LocationTextContent>
                          </LocationTitleSection>
                        </TopSection>
                      </LocationContainer>
                    ))}
                    </LocationsContainer>
                  </Container>
                </MainSection>
            </section>
          </Layout>
      </div>
  );
}

export default TryStryde;

