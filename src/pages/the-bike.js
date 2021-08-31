import React, { Component } from "react"
import Layout from "../components/layout"
import "../styles/portal.scss"
import HelmetEx from "../components/helmet-ex"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import opsmanual from "../static/Opsmanual.pdf"
import {
  CallToActionSection,
  BikeComparisonSection,
} from "../page-components/the-bike"
import {
  BikeBoxLogo,
  FamilyBoxLogo,
  PlayBoxLogo,
} from "../page-components/the-bike/elements/iconElements"
import useContent from "../hooks/useContent"

const pageName = 'theBike'

const TheBike = ({ data }) => {
  const { content } = useContent(pageName)
  return (
    <div>
      <Layout>
        <HelmetEx>
          <div metadata="title">{content(["meta", "title"])}</div>
          <div metadata="keywords">{content(["meta", "keywords"])}</div>
          <div metadata="path">{content(["meta", "faq"])}</div>
          <div metadata="description">{content(["meta", "description"])}</div>
        </HelmetEx>
        <CallToActionSection />
        <section className="bike-difference-section">
          <div className="container">
            <div className="bike-diference-desktop d-md-none d-lg-block">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="card text-center">
                    <PlayBoxLogo />
                    <div className="card-body">
                      <h5 className="card-title">
                        {content(["features", "immersive", "title"])}
                      </h5>
                      <p className="card-text">
                        {content(["features", "immersive", "content"])}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="card">
                    <BikeBoxLogo />
                    <div className="card-body">
                      <h5 className="card-title">
                        {content(["features", "everyOccasion", "title"])}
                      </h5>
                      <p className="card-text">
                        {content(["features", "everyOccasion", "content"])}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="card">
                    <FamilyBoxLogo />
                    <div className="card-body">
                      <h5 className="card-title">
                        {content(["features", "wholeFamily", "title"])}
                      </h5>
                      <p className="card-text">
                        {content(["features", "wholeFamily", "content"])}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bike-diference-mobile d-lg-none">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="card text-center">
                    <PlayBoxLogo />
                    <div className="card-body">
                      <h5 className="card-title">
                        {content(["features", "immersive", "title"])}
                      </h5>
                      <p className="card-text">
                        {content(["features", "immersive", "content"])}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-sm-12">
                  <div className="card">
                    <BikeBoxLogo />
                    <div className="card-body">
                      <h5 className="card-title">
                        {content(["features", "everyOccasion", "title"])}
                      </h5>
                      <p className="card-text">
                        {content(["features", "everyOccasion", "content"])}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 d-mobile-none">
                <div className="col-md-12 col-sm-12">
                  <div className="card">
                    <FamilyBoxLogo />
                    <div className="card-body">
                      <h5 className="card-title">
                        {content(["features", "wholeFamily", "title"])}
                      </h5>
                      <p className="card-text">
                        {content(["features", "wholeFamily", "content"])}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BikeComparisonSection />
        <section className="pressquotes-section">
          <div className="container">
            <div className="pressquotes-desktop d-md-none d-lg-block">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="card text-center">
                    <div className="card-icon">
                      <Img
                        fixed={data.businessinsider.childImageSharp.fixed}
                        className="img-fluid"
                        alt="content library icon"
                      />
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        "Is, quite simply, a joy to ride. The design is
                        thoughtful, sleek, and supremely sturdy"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="card">
                    <div className="card-icon">
                      <Img
                        fixed={data.forbes.childImageSharp.fixed}
                        className="img-fluid"
                        alt="realtime icon"
                      />
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        "Of all the Peloton competitors, Stryde has the most
                        unique and compellingly different approach"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="card">
                    <div className="card-icon">
                      <Img
                        fixed={data.fitrated.childImageSharp.fixed}
                        className="img-fluid"
                        alt="music suite icon"
                      />
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        "Even without a subscription, the Stryde Bike can still
                        be used for training at home. It’s win-win."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pressquotes-mobile d-lg-none">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="card text-center">
                    <Img
                      fixed={data.businessinsider.childImageSharp.fixed}
                      className="img-fluid"
                      alt="content library icon"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        "Is, quite simply, a joy to ride. The design is
                        thoughtful, sleek, and supremely sturdy."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 col-sm-12 mt-3">
                  <div className="card">
                    <Img
                      fixed={data.forbes.childImageSharp.fixed}
                      className="img-fluid"
                      alt="realtime icon"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        "Of all the Peloton competitors, Stryde has the most
                        unique and compellingly different approach."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 d-mobile-none">
                <div className="col-lg-4 col-md-12 col-sm-12 mt-3">
                  <div className="card">
                    <Img
                      fixed={data.fitrated.childImageSharp.fixed}
                      className="img-fluid"
                      alt="music suite icon"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        "Even without a subscription, the Stryde Bike can still
                        be used for training at home. It’s win-win."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="specifications-section">
          <div className="specifications-banner">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 text-center">
                  <h3>Specifications</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="specifications-bike">
            <div className="container">
              <h3>Bike</h3>
              <div className="row">
                <div className="col-12">
                  <p>FOOTPRINT</p>
                  <h5>4’ L x 2’ W</h5>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-9">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                      <p>WEIGHT</p>
                      <h5>Total: 135 lbs</h5>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                      <p>FRAME</p>
                      <h5>125 lbs</h5>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                      <p>CONSOLE</p>
                      <h5>10 lbs</h5>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="col-3"></div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12">
                  <p>FRAME</p>
                  <h5>Welded powder-coated steel</h5>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p>RESISTANCE MECHANISM</p>
                  <h5>
                    Magnetic microresistance system with 100 resistance levels
                  </h5>
                  <hr />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12">
                  <p>PEDALS</p>
                  <h5>SPD with toecages</h5>
                  <hr />
                </div>
              </div>
              <h3 className="mt-4">Tablet</h3>
              <div className="row">
                <div className="col-12">
                  <p>INTERNET CONNECTIVITY</p>
                  <h5>
                    802.11 a/b/g/n/ac <br /> 100 Mbps ethernet <br />
                    ANT + wireless
                  </h5>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-9">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-6 ">
                      <p>SCREEN SIZE</p>
                      <h5>21.5”</h5>
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-6">
                      <p>RESOLUTION</p>
                      <h5>Full HD 1080p</h5>
                    </div>
                  </div>
                </div>
                <div className="col-3"></div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12">
                  <p>AUDIO</p>
                  <h5>
                    2 speakers, 3.5mm headphones port and Bluetooth connectivity
                  </h5>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p>HARDWARE</p>
                  <h5>
                    16GB internal storage <br /> 2GB RAM <br /> Quad-core
                    MediaTek MT8167A processor
                  </h5>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="warranty-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <p>
                  To see more details on installation and bike maintenance{" "}
                  <br />
                  <span>
                    <a href={opsmanual} download>
                      see the operating manual.
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="disclosure-section">
          <div className="container">
            <p>
              *This example payment based on the listed product price assuming a
              36 month term loan and a 9.99% APR. Your terms may vary and are
              subject to credit approval. Down payment may be required. Rates
              range from 6.99% to 29.99% APR. Bread® loans are made by Cross
              River Bank, a New Jersey Chartered Bank, Member FDIC.
            </p>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default TheBike

export const query = graphql`
  query {
    ratings: allYotpoProductBottomline {
      nodes {
        productIdentifier
        totalReviews
        score
      }
    }
    bikeImage: file(relativePath: { eq: "home/inspireBike.png" }) {
      childImageSharp {
        fluid(maxWidth: 663, maxHeight: 649) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    freeshippingicon: file(relativePath: { eq: "home/shippingicon.png" }) {
      childImageSharp {
        fixed(width: 58, height: 66) {
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
    warrantyicon: file(relativePath: { eq: "home/warrantyicon.png" }) {
      childImageSharp {
        fixed(width: 53, height: 66) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    returnsicon: file(relativePath: { eq: "home/returnsicon.png" }) {
      childImageSharp {
        fixed(width: 66, height: 66) {
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
    businessinsider: file(relativePath: { eq: "home/businessinsider.png" }) {
      childImageSharp {
        fixed(width: 200, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    forbes: file(relativePath: { eq: "home/forbes.png" }) {
      childImageSharp {
        fixed(width: 200, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fitrated: file(relativePath: { eq: "home/fitrated.png" }) {
      childImageSharp {
        fixed(width: 200, height: 100) {
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
