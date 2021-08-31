import React, { Fragment } from 'react';
import ContentPartnerCard from './ContentPartnerCard';
const ContentPartnerDetails = ({ data, partner }) => {
    return (
        <Fragment>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <ContentPartnerCard partner={partner} data={data} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 about-studios">
                <h3 className="titleStudio">{partner.name}</h3>
                {partner.states.map(state => <h5>{state}</h5>)}
                <p>
                    <span>ABOUT THE STUDIO</span>
                </p>
                {partner.about.map(paragraph => <p> {paragraph} </p>)}
            </div>
        </Fragment>
    )
}

export default ContentPartnerDetails;