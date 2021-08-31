import React, { Component } from "react"
import Slider from "react-slick"
import "../styles/portal.scss"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import rideRate from "../images/home/classPass.svg"
import yelpImg from "../images/home/yelp.svg"
import googleImg from "../images/home/google.svg"
import contentPartnersData from "../data/content-partners-data.json"
import Stars from "./partner/Stars"

const ContentPartnersSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const data = useStaticQuery(graphql`
    query {
      primeCycleLogo: file(
        relativePath: { eq: "prime-cycle/prime-cycle-logo.png" }
      ) {
        childImageSharp {
          fixed(width: 92, height: 83) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      vibeRideLogo: file(relativePath: { eq: "home/vide-ride.png" }) {
        childImageSharp {
          fixed(width: 110, height: 83) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      redBikeLogo: file(relativePath: { eq: "red-bike/logo-red-bike.png" }) {
        childImageSharp {
          fixed(width: 260, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      highRide: file(relativePath: { eq: "home/high-ride.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cityCycleLogo: file(
        relativePath: { eq: "city-cycle/CITY_CYCLE_Logo.png" }
      ) {
        childImageSharp {
          fixed(height: 83) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Slider {...settings}>
      {contentPartnersData.map((contentPartner) => (
        <div className="container d-flex">
          <div className="studios-slider">
            <div className="content-partners-title">
              <p className="text-center">{contentPartner.name}</p>
            </div>
            <div className="card text-center">
              <Img
                fixed={data[contentPartner.logoImg].childImageSharp.fixed}
                className="card-img-top"
                alt="Partner logo"
              />
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={rideRate}
                        alt="classpass"
                        className="classPassImg"
                      />
                      <h2>{contentPartner.ratings.rideRate}</h2>
                      <ul className="text-center">
                        {Stars(parseFloat(contentPartner.ratings.rideRate)).map(
                          (star) => star
                        )}
                      </ul>
                    </div>
                    <div className="col-4">
                      <img src={yelpImg} alt="yelp" />
                      <h2>{contentPartner.ratings.yelp}</h2>
                      <ul className="text-center">
                        {Stars(parseFloat(contentPartner.ratings.yelp)).map(
                          (star) => star
                        )}
                      </ul>
                    </div>
                    <div className="col-4">
                      <img src={googleImg} alt="google" />
                      <h2>{contentPartner.ratings.google}</h2>
                      <ul className="text-center">
                        {Stars(parseFloat(contentPartner.ratings.google)).map(
                          (star) => star
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                {contentPartner.testimonials &&
                  contentPartner.testimonials.map((testimonial) => (
                    <p>
                      “{testimonial.description}” <br />
                      <span>{testimonial.author}</span>
                    </p>
                  ))}

                <Link to={contentPartner.studioUrl} className="btn btn-primary">
                  View Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}
export default ContentPartnersSlider
