import React, { Component } from "react"
import Slider from "react-slick"
import "../../styles/portal.scss"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

export default class CityCycleSlider extends Component {
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
               cityCycleOne: file(relativePath: { eq: "city-cycle/Featured - City Cycle.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
               cityCycleTwo: file(relativePath: { eq: "city-cycle/citycycle-img-2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
                cityCycleThree: file(relativePath: { eq: "city-cycle/citycycle-img-3.jpg" }) {
                    childImageSharp {
                            fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                  cityCycleFour: file(relativePath: { eq: "city-cycle/citycycle-img-4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920,maxHeight:650, quality: 100){
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
                cityCycleFive: file(relativePath: { eq: "city-cycle/citycycle-img-5.jpg" }) {
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
                                <Img fluid={data.cityCycleOne.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.cityCycleTwo.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.cityCycleThree.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.cityCycleFour.childImageSharp.fluid} alt="high ride" />
                            </div>
                            <div>
                                <Img fluid={data.cityCycleFive.childImageSharp.fluid} alt="high ride" />
                            </div>
                        </Slider>
                    </div>
                )} />
        )
    }
}
