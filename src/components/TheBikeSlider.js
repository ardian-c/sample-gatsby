import React, { Component } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "../styles/portal.scss"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <StaticQuery
        query={graphql`
          query {
            bikeImgTwo: file(relativePath: { eq: "home/the-bike-img-2.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 550, maxHeight: 530) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            bikeImgThree: file(
              relativePath: { eq: "home/the-bike-img-3.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 550, maxHeight: 530) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            bikeImgFour: file(relativePath: { eq: "home/the-bike-img-4.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 550, maxHeight: 530) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            bikeImgFive: file(relativePath: { eq: "home/the-bike-img-5.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 550, maxHeight: 530) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            bikeImgSix: file(relativePath: { eq: "home/the-bike-img-9.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 550, maxHeight: 530) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            bikeImgSeven: file(
              relativePath: { eq: "home/the-bike-img-8.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 550, maxHeight: 530) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            bikeImgEight: file(
              relativePath: { eq: "home/the-bike-img-10.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 550, maxHeight: 530) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Slider {...settings}>
              <div>
                <Img
                  fluid={data.bikeImgTwo.childImageSharp.fluid}
                  className="img-fluid"
                  alt="bike slider"
                />
              </div>
              <div>
                <Img
                  fluid={data.bikeImgSeven.childImageSharp.fluid}
                  className="img-fluid"
                  alt="bike slider"
                />
              </div>
              <div>
                <Img
                  fluid={data.bikeImgFour.childImageSharp.fluid}
                  className="img-fluid"
                  alt="bike slider"
                />
              </div>
              <div>
                <Img
                  fluid={data.bikeImgSix.childImageSharp.fluid}
                  className="img-fluid"
                  alt="bike slider"
                />
              </div>
              <div>
                <Img
                  fluid={data.bikeImgThree.childImageSharp.fluid}
                  className="img-fluid"
                  alt="bike slider"
                />
              </div>
            </Slider>
          </>
        )}
      />
    )
  }
}
