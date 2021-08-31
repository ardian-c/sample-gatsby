import React, { useEffect } from "react"
import { graphql } from "gatsby"
import useContent from "../hooks/useContent"
import HelmetEx, { MetadataElement } from "../components/helmet-ex"
import Layout from "../components/layout"
import "video.js/dist/video-js.css"
import {
  AddToCartSection,
  AreYouReadySection,
  BikeFeaturesSection,
  CompanyTestimonials,
  FeaturedAppSection,
  MainSection,
  TestimonialSection
} from "../page-components/home"

interface HomeProps {
  data: any
}
const Home: React.FC<HomeProps> = ({ data }) => {
  const { content } = useContent("home")

  useEffect(() => {
    window.scrollTo(0,0)
  }, [data])

  return (
    <Layout>
      <HelmetEx>
        <MetadataElement metadata="title">{content(["meta", "title"])}</MetadataElement>
        <MetadataElement metadata="keywords">
          {content(["meta", "keywords"])}
        </MetadataElement>
        <MetadataElement metadata="path">{content(["meta", "faq"])}</MetadataElement>
        <MetadataElement metadata="description">
          {content(["meta", "description"])}
        </MetadataElement>
      </HelmetEx>
      <MainSection />
      <CompanyTestimonials />
      <AddToCartSection />
      <FeaturedAppSection />
      <BikeFeaturesSection />
      <TestimonialSection />
      <AreYouReadySection />
      {/* <section className="disclosure-section">
        <div className="container">
          <p>
            *This example payment based on the listed product price assuming a
            36 month term loan and a 9.99% APR. Your terms may vary and are
            subject to credit approval. Down payment may be required. Rates
            range from 6.99% to 29.99% APR. Bread® loans are made by Cross River
            Bank, a New Jersey Chartered Bank, Member FDIC.
          </p>
        </div>
      </section> */}
    </Layout>
  )
}

export default Home

export const query = graphql`
  query {
    bikeImage: file(relativePath: { eq: "home/inspireBike.png" }) {
      childImageSharp {
        fluid(maxWidth: 663, maxHeight: 649) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    streamingIcon: file(relativePath: { eq: "home/streaming-icon.png" }) {
      childImageSharp {
        fixed(width: 55, height: 44) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    availableClasses: file(relativePath: { eq: "home/available_classes.png" }) {
      childImageSharp {
        fluid(maxWidth: 516, maxHeight: 563) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    contentLibrary: file(relativePath: { eq: "home/content-library.png" }) {
      childImageSharp {
        fixed(width: 61, height: 61) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    realTime: file(relativePath: { eq: "home/real-time-leaderboard.png" }) {
      childImageSharp {
        fixed(width: 46, height: 55) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    musicSuite: file(relativePath: { eq: "home/music-taste.png" }) {
      childImageSharp {
        fixed(width: 61, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    workoutHistory: file(relativePath: { eq: "home/workout-history.png" }) {
      childImageSharp {
        fixed(width: 58, height: 67) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    classRating: file(relativePath: { eq: "home/class-rating.png" }) {
      childImageSharp {
        fixed(width: 57, height: 54) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bikeImg: file(relativePath: { eq: "home/bike-img.png" }) {
      childImageSharp {
        fluid(maxWidth: 1210, maxHeight: 824) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileBike: file(relativePath: { eq: "home/mobile-bike.png" }) {
      childImageSharp {
        fixed(width: 370, height: 330) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    topQuality: file(relativePath: { eq: "home/top-quality-bike.png" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    androidTablet: file(relativePath: { eq: "home/android-tablet.png" }) {
      childImageSharp {
        fixed(width: 84, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    returnWindow: file(relativePath: { eq: "home/return-window.png" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    compacSize: file(relativePath: { eq: "home/compac-size.png" }) {
      childImageSharp {
        fixed(width: 73, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    installOptions: file(relativePath: { eq: "home/install-options.png" }) {
      childImageSharp {
        fixed(width: 63, height: 71) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    contentPartners: file(relativePath: { eq: "home/content-partners.png" }) {
      childImageSharp {
        fluid(maxHeight: 735) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    areYouReady: file(relativePath: { eq: "home/are-you-ready.png" }) {
      childImageSharp {
        fixed(width: 268, height: 280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pieceOneBike: file(relativePath: { eq: "home/piece-1-img.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pieceTwoBike: file(relativePath: { eq: "home/piece-2-img.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pieceThreeBike: file(relativePath: { eq: "home/piece-3-img.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pieceFourBike: file(relativePath: { eq: "home/piece-4-img.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pieceFiveBike: file(relativePath: { eq: "home/piece-5-img.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
