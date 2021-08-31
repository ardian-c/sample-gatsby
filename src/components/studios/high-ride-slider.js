import React, { Component } from "react"
import Slider from "react-slick"
import "../../styles/portal.scss"

import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
export default class HighRideSlider extends Component {
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
                highRideCycleImgOne: file(relativePath: { eq: "high-ride-cycle/high-ride-cycle-img-2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
                highRideCycleImgTwo: file(relativePath: { eq: "high-ride-cycle/high-ride-cycle-img-5.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
                highRideCycleImgThree: file(relativePath: { eq: "high-ride-cycle/high-ride-cycle-img-3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
                highRideCycleImgFour: file(relativePath: { eq: "high-ride-cycle/high-ride-cycle-img-4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
                highRideCycleImgFive: file(relativePath: { eq: "high-ride-cycle/Featured - High Ride Cycle.jpg" }) {
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
                                <Img fluid={data.highRideCycleImgOne.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.highRideCycleImgTwo.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.highRideCycleImgThree.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.highRideCycleImgFour.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.highRideCycleImgFive.childImageSharp.fluid} alt="high ride" />
                            </div>
                        </Slider>
                    </div>
                )} />
        )
    }
}
