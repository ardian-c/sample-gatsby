import React, { Component } from "react"
import Slider from "react-slick"
import "../../styles/portal.scss"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

export default class VibeRideSlider extends Component {
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
               vibeRideImgOne: file(relativePath: { eq: "vibe-ride/Featured - Vibe Ride.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                }
                }
                  vibeRideImgTwo: file(relativePath: { eq: "vibe-ride/vide-ride-img-1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                }
                }
                  vibeRideImgThree: file(relativePath: { eq: "vibe-ride/vide-ride-img-2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                }
                }
                        vibeRideImgFour: file(relativePath: { eq: "vibe-ride/vide-ride-img-3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                }
                }
                vibeRideImgFive: file(relativePath: { eq: "vibe-ride/vide-ride-img-4.jpg" }) {
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
                                <Img fluid={data.vibeRideImgOne.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.vibeRideImgTwo.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.vibeRideImgThree.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.vibeRideImgFour.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.vibeRideImgFive.childImageSharp.fluid} alt="high ride" />
                            </div>
                        </Slider>
                    </div>
                )} />
        )
    }
}
