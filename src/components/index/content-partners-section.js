import React, { useState } from 'react';
import { Link } from "gatsby";
import "../../styles/portal.scss"
import ContentPartnersSlider from '../content-partners-slider-mobile';
import googleImg from "../../images/home/google.svg"
import primeCycleLogo from '../../images/prime-cycle/prime-cycle-logo.png';
import vibeRideLogo from "../../images/home/vide-ride.png";
import redBikeLogo from "../../images/red-bike/logo-red-bike.png";
import cityCycleLogo from "../../images/city-cycle/CITY_CYCLE_Logo.png";
import yelpImg from "../../images/home/yelp.svg";
import contentPartners from "../../images/home/content-partners.png";
import highRide from "../../images/home/high-ride.png";
import rideRate from "../../images/home/classPass.svg";
import partners from '../../data/content-partners-data.json';
import Stars from '../partner/Stars';

const images = {
    contentPartners,
    highRide,
    cityCycleLogo,
    primeCycleLogo,
    redBikeLogo,
    vibeRideLogo
};

export default () => {
    const [current, setCurrent] = useState(0);
    const partner = partners[current];

    return (
        <section className="content-partners-section">
            <div className="container-fluid">
                <div className="mobile-slider-content-partners d-md-block d-lg-none">
                    <div className="mobile-content-partners">
                        <div className="container">
                            <h3 className="text-white">Meet studios on Stryde app.</h3>
                        </div>
                    </div>
                    <ContentPartnersSlider />
                </div>
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide d-md-none d-lg-block"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={images[partner.backgroundImg]}
                                className="d-block w-100 backgroundContentImg"
                                alt="studio partners"
                            />
                            <div className="carousel-caption d-md-block">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-1">
                                            {current > 0 && <a
                                                className="carousel-control-prev"
                                                role="button"
                                                data-slide="prev"
                                                onClick={() => { setCurrent(current - 1) }}
                                            >
                                                <span
                                                    className="carousel-control-prev-icon"
                                                    aria-hidden="true"
                                                ></span>
                                                <span className="sr-only">Previous</span>
                                            </a>}
                                        </div>
                                        <div className="col-lg-6">
                                            <h3>Meet studios on Stryde</h3>
                                            <p className="studioName">{partner.name}</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card text-center">
                                                <img
                                                    src={images[partner.logoImg]}
                                                    className="card-img-top"
                                                    alt="partner logo"
                                                />
                                                <div className="card-body">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-4">
                                                                <img
                                                                    className="classPassImg"
                                                                    src={rideRate}
                                                                    alt="classpass"
                                                                />
                                                                <h2>{partner.ratings.rideRate}</h2>
                                                                <ul className="text-center">
                                                                    {Stars(parseFloat(partner.ratings.rideRate)).map(star => star)}
                                                                </ul>
                                                            </div>
                                                            <div className="col-4">
                                                                <img src={yelpImg} alt="yelp" />
                                                                <h2>{partner.ratings.yelp}</h2>
                                                                <ul className="text-center">
                                                                    {Stars(parseFloat(partner.ratings.yelp)).map(star => star)}
                                                                </ul>
                                                            </div>
                                                            <div className="col-4">
                                                                <img src={googleImg} alt="google" />
                                                                <h2>{partner.ratings.google}</h2>
                                                                <ul className="text-center">
                                                                    {Stars(parseFloat(partner.ratings.google)).map(star => star)}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    {partner.testimonials.map(testimonial => {
                                                        return (
                                                            <p className="text-center">
                                                                “{testimonial.description}” <br />
                                                                <span>{testimonial.author}</span>
                                                            </p>
                                                        )
                                                    })}
                                                    <Link to={partner.studioUrl} className="btn btn-primary">
                                                        View Studio
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-1">
                                            {current + 1 < partners.length && <a
                                                className="carousel-control-next"
                                                role="button"
                                                data-slide="next"
                                                onClick={() => { setCurrent(current + 1) }}
                                            >
                                                <span
                                                    className="carousel-control-next-icon"
                                                    aria-hidden="true"
                                                ></span>
                                                <span className="sr-only" >Next</span>
                                            </a>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}