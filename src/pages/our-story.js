import React from "react"
import Layout from "../components/layout"
import "../styles/portal.scss"
import { graphql } from 'gatsby'
import HelmetEx from '../components/helmet-ex'
import Img from 'gatsby-image'
import bike from "../images/our-story/bike.svg"
import imgOurStory1 from "../images/our-story/img-our-story-1.svg"
import imgOurStory2 from "../images/our-story/img-our-story-2.svg"
import lineImg from "../images/our-story/line.svg"
import salaryImg from "../images/our-story/salary.svg"
import lineMobile1 from "../images/our-story/lineMobile1.svg"
import lineMobile2 from "../images/our-story/lineMobile2.svg"

const About = ({ data }) => {
  return (
    <div>
      <Layout>
        <section className="about-us-section">
          <HelmetEx>
            <div metadata="title">
              Our Story
            </div>
            <div metadata="keywords">
              indoor cycling, indoor cycle, interactive bike, streaming classes, virtual classes, technology, stryde bike, virtual workouts
            </div>
            <div metadata="path">/faq</div>
            <div metadata="description">
              Access indoor cycling classes from country's top studios on an interactive bike at your home
            </div>
          </HelmetEx>
          <div className="container">
            <div className="row mb-0">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <div className="text-center">
                  <p>
                    <span>Our mission is simple:</span>
                  </p>
                  <h2>
                    Classes from the best instructors. Bike that is a joy to
                    ride. Fair price.
                  </h2>
                  <Img fluid={data.ourMission.childImageSharp.fluid} className="img-fluid mb-5" alt="our mission" />
                </div>
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-12">
                    <h3>
                      Bringing the boutique cycling experience to the homes of America.
                    </h3>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-12">
                    <p>
                      Stryde started with a simple idea: the best home fitness experience is a personal one, where you are empowered to choose the workout that’s right for you. That’s why we’ve partnered with the most popular instructors and boutique studios from across the country—to deliver the broadest selection of cycling classes streamed directly to your home.  Giving you the control to find that perfect ride, crush your goals, and take on more.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <Img fluid={data.superbBike.childImageSharp.fluid} className="img-fluid" alt="super bike" />

                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h3>Bike designed for sharp looks and superb ride.</h3>
                    <p>
                      When we set out to create Stryde, we weren’t sure whether or not we wanted to build a bike—there are so many out there already.  But after looking at dozens of existing models, we realized the available options either did not have the quality and design we were looking for, or were very expensive because of large mark-ups. We needed a bike that would deliver the experience that your workout deserved.  So, working with a German industrial designer, we developed one from scratch.
                    </p>
                  </div>
                </div>

                <div className="desktopView d-md-none d-lg-block">
                  <div className="row mb-0">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <h3>
                        Company built with a laser focus on giving you the best
                        price.
                      </h3>
                      <p>
                        We made no sacrifices in designing our own bike. To make our design more affordable, we partnered with one of the world's leading fitness manufacturers and focused on making our company as efficient as possible. No fancy stores. No crazy markups. Just amazing content, a great bike and significant savings for our community.
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="card">
                        <p>Competitors</p>
                        <h6 className="m-0">$1,900 and up</h6>
                        <div className="row mt-4">
                          <div className="col-md-6 col-sm-12">
                            <div className="row">
                              <div className="col-6 costImg">
                                <img src={imgOurStory2} alt="our story statistics" />
                              </div>
                              <div className="col-6">
                                <p>Stryde</p>
                                <h6>$1,595</h6>
                                <img src={imgOurStory1} alt="our story statistics" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <ul className="d-flex listcost1">
                              <li className="line mr-2">
                                <img src={lineImg} alt="line one" />
                              </li>
                              <li className="pl-1 salaryImg">
                                <img src={salaryImg} alt="salary" />
                              </li>
                              <li className="pl-1 expencesItem">
                                Expenses and profit $395
                              </li>
                            </ul>
                            <ul className="d-flex listcost2">
                              <li>
                                <img src={lineImg} alt="line two" />
                              </li>
                              <li className="pl-1 bikeCostItem">
                                <img src={bike} alt="bike" />
                              </li>
                              <li className="pl-1 bikeCostItem">
                                Bike <br />
                                $850
                              </li>
                            </ul>
                            <ul className="d-flex listcost3">
                              <li className="line">
                                <img src={lineImg} alt="line three" />
                              </li>
                              <li className="pl-1">Servicing $100</li>
                            </ul>
                            <ul className="d-flex listcost4">
                              <li className="line">
                                <img src={lineImg} alt="line four" />
                              </li>
                              <li className="pl-1">Shipping $250</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mobileView d-md-block d-lg-none">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <h3>
                        Company built with a laser focus on giving you the best
                        price.
                      </h3>
                      <div className="card">
                        <p>Competitors</p>
                        <h6 className="m-0">$1,900 and up</h6>
                        <div className="row mt-4">
                          <div className="col-md-6 col-sm-12">
                            <div className="row">
                              <div className="col-6 costImg">
                                <img src={imgOurStory2} alt="our story statistics" />
                              </div>
                              <div className="col-6 costImg2">
                                <p>Stryde</p>
                                <h6>$1,595</h6>
                                <img src={imgOurStory1} alt="our story staticstics" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <ul className="d-flex listcost1">
                              <li className="line mr-2">
                                <img src={lineImg} alt="line one" />
                              </li>
                              <li className="pl-1 salaryImg">
                                <img src={salaryImg} alt="salary" />
                              </li>
                              <li className="pl-3">Expenses and profit $395</li>
                            </ul>
                            <ul className="d-flex listcost2">
                              <li className="line">
                                <img src={lineImg} alt="line two" />
                              </li>
                              <li className="pl-1 bikeCostItem">
                                <img src={bike} alt="bike" />
                              </li>
                              <li className="pl-4 bikeCostItem">
                                Bike cost<br />
                                $850
                              </li>
                            </ul>
                            <ul className="d-flex listcost3">
                              <li className="pr-1">
                                <img src={lineMobile2} alt="line three" />
                              </li>
                              <li className="pl-4">Servicing cost $100</li>
                            </ul>
                            <ul className="d-flex listcost4">
                              <li className="pr-1">
                                <img src={lineMobile1} alt="line four" />
                              </li>
                              <li className="pl-4">Shipping cost $250</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <p>
                      We made no sacrifices in designing our own bike. To make our design more affordable, we partnered with one of the world's leading fitness manufacturers and focused on making our company as efficient as possible. No fancy stores. No crazy markups. Just amazing content, a great bike and significant savings for our community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default About
export const query = graphql`
 query {
 ourMission: file(relativePath: { eq: "our-story/our-mission.png" }) {
      childImageSharp {
        fluid(maxWidth: 2520, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    superbBike: file(relativePath: { eq: "our-story/bike-superb-ride.png" }) {
      childImageSharp {
        fluid(maxWidth: 2520, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
`