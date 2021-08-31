import React, { Component, Fragment } from "react"
import { Link, graphql, StaticQuery } from 'gatsby'
import Slider from "react-slick"
import Img from 'gatsby-image'
import desktopImg from "../../images/index/desktop_img.png"

export default props => {
  return (
    <section className="top-studios-section">
      <div className="container">
        <div className="row">
          <div className="offset-lg-1 col-lg-5 px-5 px-lg-0">
            <AsNavFor />
          </div>
          <div className="offset-lg-1 col-lg-5">
            <h3 className="text-center text-lg-left">No matter how you want to ride, we've got you covered.</h3>
            <p className="text-lg-left text-center">
            Take classes with top instructors in the Stryde app. Or use your favorite streaming or fitness Android apps while still tracking your bike's metrics - no active subscription necessary.  
            </p>
            <div className="top-studios-btn d-flex justify-content-center justify-content-lg-start">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

class AsNavFor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
      displaySettings: {
        dots: false,
        fade: true,
      },
      adaptiveHeight: true,
      slideSettings: {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      },
    }
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }

  render() {
    return (
      <StaticQuery
        query={
          graphql`
            query {
                 sliderImgFive: file(relativePath: { eq: "index/slider07_reduced.png" }) {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                sliderImgFour: file(relativePath: { eq: "index/slider03.png" }) {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
               sliderImgThree: file(relativePath: { eq: "index/slider04.png" }) {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                 sliderImgTwo: file(relativePath: { eq: "index/slider002.png" }) {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                sliderImgOne: file(relativePath: { eq: "index/slider00.png" }) {
                  childImageSharp {
                    fluid{
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `
        }
        render={data =>
          (
            <Fragment>
              <div className="position-relative">
                {/* <Img fluid={data.desktopImg.childImageSharp.fluid} className="dpImage" alt="desktop no matter fitnes" /> */}
                <img src={desktopImg} className="img-fluid dpImage" alt="slider  no matter fitnes" />
                <div className="display">
                  <Slider
                    {...this.state.displaySettings}
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                  >
                    <div>
                      <Img fluid={data.sliderImgFive.childImageSharp.fluid} className="img-fluid" alt="desktop no matter fitnes" />
                    </div>
                    <div>
                      <Img fluid={data.sliderImgTwo.childImageSharp.fluid} className="img-fluid" alt="desktop no matter fitnes" />
                    </div>
                    <div>
                      <Img fluid={data.sliderImgThree.childImageSharp.fluid} className="img-fluid" alt="desktop no matter fitnes" />
                    </div>
                    <div>
                      <Img fluid={data.sliderImgFour.childImageSharp.fluid} className="img-fluid" alt="desktop no matter fitnes" />
                    </div>
                    <div>
                      <Img fluid={data.sliderImgOne.childImageSharp.fluid} className="img-fluid" alt="desktop no matter fitnes" />
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="slider">
                <div className="left-shadow"></div>
                <div className="right-shadow"></div>
                <Slider
                  {...this.state.slideSettings}
                  asNavFor={this.state.nav1}
                  ref={slider => (this.slider2 = slider)}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div>
                    <Img fluid={data.sliderImgFive.childImageSharp.fluid} className="img-fluid" alt="desktop no matter fitnes" />
                  </div>
                  <div>
                    <Img fluid={data.sliderImgTwo.childImageSharp.fluid} className="img-fluid" alt="desktop no matter fitnes" />
                  </div>
                  <div>
                    <Img fluid={data.sliderImgThree.childImageSharp.fluid} className="img-fluid" alt="desktop no matter fitnes" />
                  </div>
                  <div>
                    <Img fluid={data.sliderImgFour.childImageSharp.fluid} className="img-fluid" alt="desktop no matter fitnes" />
                  </div>
                  <div>
                    <Img fluid={data.sliderImgOne.childImageSharp.fluid} className="img-fluid" alt="desktop no matter fitnes" />
                  </div>
                </Slider>
              </div>
            </Fragment>
          )
        }
      />
    )
  }
}