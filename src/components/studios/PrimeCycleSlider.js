import React, { Component } from "react"
import Slider from "react-slick"
import "../../styles/portal.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const PrimeCycle = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const data = useStaticQuery(graphql`
    query{
        primeCycleOne: file(relativePath: { eq: "prime-cycle/prime-cycle-1.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1920,maxHeight:650, quality: 100){
            ...GatsbyImageSharpFluid
            }
        }
        }
        primeCycleTwo: file(relativePath: { eq: "prime-cycle/prime-cycle-2.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1920,maxHeight:650, quality: 100){
            ...GatsbyImageSharpFluid
            }
        }
        }
        primeCycleThree: file(relativePath: { eq: "prime-cycle/prime-cycle-3.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1920,maxHeight:650, quality: 100){
            ...GatsbyImageSharpFluid
            }
        }
        }
        primeCycleFour: file(relativePath: { eq: "prime-cycle/prime-cycle-4.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1920,maxHeight:650, quality: 100){
            ...GatsbyImageSharpFluid
            }
        }
        }
        primeCycleFive: file(relativePath: { eq: "prime-cycle/prime-cycle-5.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1920,maxHeight:650, quality: 100){
            ...GatsbyImageSharpFluid
            }
        }
        }
    }`);

    console.log("DASDASDAS", data);
    return (
        <div className='highRide-section'>
            <Slider {...settings}>
                <div>
                    <Img fluid={data.primeCycleOne && data.primeCycleOne.childImageSharp.fluid} alt="Prime cycle" />
                </div>
                <div>
                    <Img fluid={data.primeCycleOne && data.primeCycleTwo.childImageSharp.fluid} alt="Prime cycle" />
                </div>
                <div>
                    <Img fluid={data.primeCycleOne && data.primeCycleThree.childImageSharp.fluid} alt="Prime cycle" />
                </div>
                <div>
                    <Img fluid={data.primeCycleOne && data.primeCycleFour.childImageSharp.fluid} alt="Prime cycle" />
                </div>
                <div>
                    <Img fluid={data.primeCycleOne && data.primeCycleFive.childImageSharp.fluid} alt="Prime cycle" />
                </div>
            </Slider>
        </div>
    );
}

export default PrimeCycle;
