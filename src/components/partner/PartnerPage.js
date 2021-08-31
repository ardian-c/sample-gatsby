import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../layout";
import HelmetEx from '../helmet-ex';
import StudioSlider from '../studios';
import "../../styles/portal.scss";

import ContentPartnerDetails from '../partner/ContentPartnerDetails';
import ContentPartnersData from '../../data/content-partners-data.json';
import NextStudioComponent from './NextStudioComponent';
import PrevStudioComponent from './PrevStudioComponent';

const PartnerPage = ({ data, partnerId }) => {

    const getNextPartner = (partnerIndex) => {
        const nextIndex = partnerIndex + 1;
        if (ContentPartnersData.length <= nextIndex)
            return false;
        return ContentPartnersData[nextIndex];
    }

    const getPrevPartner = (partnerIndex) => {
        const prevIndex = partnerIndex - 1;
        if (0 > prevIndex)
            return false;
        return ContentPartnersData[prevIndex];
    }

    const partnerIndex = ContentPartnersData.findIndex(partner => partner.id === partnerId);
    const partner = ContentPartnersData[partnerIndex];
    const nextPartner = getNextPartner(partnerIndex);
    const prevPartner = getPrevPartner(partnerIndex);

    return (
        <div>
            <Layout>
                <section className="studios-section">
                    <HelmetEx>
                        <div metadata="title">
                            {partner.name}
                        </div>
                        <div metadata="keywords">
                            indoor cycling, indoor cycle, interactive bike, streaming classes, virtual classes, stryde, stryde bike, virtual workouts
                        </div>
                        <div metadata="path">/faq</div>
                        <div metadata="description">
                            Access indoor cycling classes from country's top studios on an interactive bike at your home
                        </div>
                    </HelmetEx>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>{partner.name}</h1>
                                {partner.states.map(state =>
                                    <p>{state}</p>
                                )}
                            </div>
                            <div className="col-md-12 text-right">
                                <div className="row d-none-mobile">
                                    {prevPartner && <div className={`${nextPartner ? 'col-md-6' : 'col-md-12'} text-left`}>
                                        <PrevStudioComponent prevPartner={prevPartner} />
                                    </div>}
                                    {nextPartner && <div className={`${prevPartner ? 'col-md-6' : 'col-md-12'} text-right`}>
                                        <NextStudioComponent nextPartner={nextPartner} />
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <StudioSlider partnerId={partnerId} />
                    <div className="about-studio-section">
                        <div className="container">
                            <div className="row">
                                <ContentPartnerDetails partner={partner} data={data} />
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-right">
                                    <div className="row">
                                        {prevPartner && <div className={`${nextPartner ? 'col-6' : 'col-md-12'} text-left`}>
                                            <PrevStudioComponent prevPartner={prevPartner} />
                                        </div>}
                                        {nextPartner && <div className={`${prevPartner ? 'col-6' : 'col-md-12'} text-right`}>
                                            <NextStudioComponent nextPartner={nextPartner} />
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export default PartnerPage;