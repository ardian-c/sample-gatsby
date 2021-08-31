import React, { Component } from "react"
import Slider from "react-slick"
import "../../styles/portal.scss"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

export default class RideHouseSlider extends Component {
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
                query={
                    graphql`
                    query{
               rideHouseOne: file(relativePath: { eq: "ride-house/Featured - Ride House.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                }
                }
                  rideHouseTwo: file(relativePath: { eq: "ride-house/ride-house-img-1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                }
                }
                  rideHouseThree: file(relativePath: { eq: "ride-house/ride-house-img-2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                }
                }
                        rideHouseFour: file(relativePath: { eq: "ride-house/ride-house-img-3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                }
                }
                rideHouseFive: file(relativePath: { eq: "ride-house/ride-house-img-4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
            }
            `
                }
                render={data => (
                    <div className='highRide-section'>
                        <Slider {...settings}>
                            <div>
                                <Img fluid={data.rideHouseOne.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.rideHouseTwo.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.rideHouseThree.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.rideHouseFour.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.rideHouseFive.childImageSharp.fluid} alt="high ride" />
                            </div>
                        </Slider>
                    </div>
                )} />
        )
    }
}
