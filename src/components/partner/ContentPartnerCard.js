import React from 'react';
import Stars from './Stars';
import Img from "gatsby-image";
import yelpImg from "../../images/home/yelp.svg"
import googleImg from "../../images/home/google.svg"
import rideRate from "../../images/home/classPass.svg"
import instagram from "../../images/home/instagram.svg"
import facebook from "../../images/home/facebook.svg"

const ContentPartnerCard = ({ data, partner }) => {
    console.log("THE_DATA", data, partner);
    return (
        <div className="card text-center">
            <Img fixed={data[partner.logoImg].childImageSharp.fixed} alt="partner logo" />
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src={rideRate} alt="classpass" />
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
            <div className="card-footer text-left">
                <h6>LOCATION</h6>
                {partner.locations.map(location => <p>{location}</p>)}
                <hr />
                <h6>WEBSITE</h6>
                <a href={partner.website.url} target="_new">
                    <p>{partner.website.name}</p>
                </a>
                <hr />
                <h6>FIND US ON SOCIAL MEDIA</h6>
                <ul>
                    <li className="mx-3">
                        <a
                            href={partner.social.facebook}
                            target="_new"
                        >
                            <img src={facebook} alt='facebook' />
                        </a>
                    </li>
                    <li className="mx-3">
                        <a
                            href={partner.social.instagram}
                            target="_new"
                        >
                            <img src={instagram} alt="instagram" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContentPartnerCard;