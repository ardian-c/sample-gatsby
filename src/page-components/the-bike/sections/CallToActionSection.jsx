import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import SimpleSlider from "../../../components/TheBikeSlider"
import ShopifyBuyButton from "../../../components/ShopifyBuyButton"
import Rating from "../../../components/rating"
import { OveralRating } from "../../../components/styled/rating-styled"
import useContent from "../../../hooks/useContent"
import { Container } from "../../../common/elements"
import PriceComponent from "../components/PriceComponent"
import {
  InformationPage,
  ProductDetailsContainer,
  ProductDetail,
} from "../elements/callToActionElements"
import {
  Check,
  FreeDelivery,
  ReturnIcon,
  StrydeLogo,
} from "../elements/iconElements"

const CallToActionSection = ({ data }) => {
  const { content } = useContent("theBike")
  const calculateAvarageRatings = () => {
    const {
      ratings: { nodes },
    } = data
    const total = nodes[0] && nodes[0].score
    return total
  }

  return (
    <Container>
      <div className="the-bike-section row">
        <div className="col-lg-6 col-md-6 col-sm-12 p-0 text-center">
          <SimpleSlider />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center price-section">
          <InformationPage>
            <Link to="/reviews">
              <OveralRating>
                <Rating rating={calculateAvarageRatings()} />
              </OveralRating>
            </Link>
            <StrydeLogo />
            <PriceComponent />
            <ShopifyBuyButton />
            <ProductDetailsContainer>
              <ProductDetail>
                <FreeDelivery />
                {content(["productOrder", "deliveryTime"])}
              </ProductDetail>
              <ProductDetail>
                <ReturnIcon />
                {content(["productOrder", "returnTime"])}
              </ProductDetail>
              <ProductDetail>
                <Check />
                {content(["productOrder", "warrantyTime"])}
              </ProductDetail>
            </ProductDetailsContainer>
          </InformationPage>
        </div>
      </div>
    </Container>
  )
}

export default () => {
  const query = graphql`
    query {
      ratings: allYotpoProductBottomline {
        nodes {
          productIdentifier
          totalReviews
          score
        }
      }
    }
  `
  return <CallToActionSection data={useStaticQuery(query)} />
}
