import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import breadJs from "../../../bread"
import { COLORS, FONT_FAMILY } from "../../../common/constants"
import useContent from "../../../hooks/useContent"

const SMALL_TEXT = "0.7rem"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const BreadContainer = styled.div`
  display: flex;
  align-items: center;
`
const BreadCheckoutButton = styled.div`
  overflow: hidden;
  div {
    max-width: 100px;
  }
`

const Form = styled.form`
  margin: 0;
  max-height: 22px;
  max-width: 100px;
`
const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${FONT_FAMILY};
  letter-spacing: normal;
  line-height: 1.56;
  text-align: left;
  align-items: flex-start;
`

const Price = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
  color: ${COLORS.PRIMARY_TEXT};
`

const LineThrough = styled.span`
  text-decoration: line-through;
  font-size: ${SMALL_TEXT};
  color: ${COLORS.SECONDARY_TEXT};
`
const DiscountDetails = styled.span`
  font-size: ${SMALL_TEXT};
  font-weight: normal;
  color: ${COLORS.SECONDARY_TEXT};
`

const VerticalLine = styled.div`
  border-left: 1px solid ${COLORS.DIVIDER};
  margin: 0 21px;
  height: 60px;
`

const PriceComponent = () => {
  const { content } = useContent("theBike")
  return (
    <Container>
      <PriceContainer>
        <LineThrough>{content(["prices", "originalPrice"])}</LineThrough>
        <Price>{content(["prices", "discountPrice"])}</Price>
        <DiscountDetails>
          {content(["prices", "discountDetails"])}
        </DiscountDetails>
      </PriceContainer>
      <VerticalLine />
      <BreadContainer>
        <PriceContainer>
          <DiscountDetails>As low as</DiscountDetails>
          <Price>
            $50 <DiscountDetails>/mo</DiscountDetails>
          </Price>
          <Form id="bread-checkout-form" action="/confirm" method="POST">
            <BreadCheckoutButton
              id="bread-checkout-btn"
              data-bread-default-size="true"
            ></BreadCheckoutButton>
            <Helmet>
              <script>{breadJs}</script>
            </Helmet>
          </Form>
        </PriceContainer>
      </BreadContainer>
    </Container>
  )
}

export default PriceComponent
