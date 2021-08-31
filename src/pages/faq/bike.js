import React from "react";
import Layout from "../../components/layout";
import Navigation from '../../components/faq/navigation';
import FaqElement from '../../components/faq/faq-element';
import faqs from '../../data/faq-data.json';
import "../../styles/portal.scss";

export default () => {
    return (
        <div>
            <Layout>
                <section className="faq-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <h1>FAQ</h1>
                                <p>
                                    And if you don’t find what you’re looking for, please <br />
                                    <span>send us a message.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 pl-0 pr-0">
                                <div className="faq-questions-section">
                                    <Navigation />
                                    <div className="tab-content" id="pills-tabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="pills-questions"
                                            role="tabpanel"
                                            aria-labelledby="pills-questions-tab"
                                        >
                                            <div className="container">
                                                {faqs.bike.map(faq =>
                                                    <FaqElement
                                                        question={faq.question}
                                                        answer={faq.answer}
                                                    />
                                                )}
                                            </div>
                                        </div>
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