import React from "react"
import SimpleSlider from "../../../components/TheBikeSlider"
import ShopifyBuyButton from "../../../components/ShopifyBuyButton"
import useContent from "../../../hooks/useContent"
import { Container, ParagraphSecondary, VerticalSpacer, TinyText, TitleTertiary, } from "../../../common/elements"
import { PrimaryButton } from "../../../common/components"
import PriceComponent from "../../the-bike/components/PriceComponent"
import {
  InformationPage,
} from "../../the-bike/elements/callToActionElements"
import { SecondaryBackgroundWrapper } from './elements'

export const AddToCartSection = () => {
  const { content } = useContent("home")

  return (
    <SecondaryBackgroundWrapper id="AddToCartSection">
      <Container>
        <div className="the-bike-section row">
          <div className="col-lg-6 col-md-6 col-sm-12 p-0 text-center">
            <SimpleSlider />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center price-section">
            <InformationPage>
              <TitleTertiary uppercase>{content(["addToCartSection", "title"])}</TitleTertiary>
              <ParagraphSecondary>
                {content(["addToCartSection", "description"])}
              </ParagraphSecondary>
              <PriceComponent />
              <VerticalSpacer large />
              <TinyText>{content(["addToCartSection", "footNote"])}</TinyText>
              <VerticalSpacer large />
              <PrimaryButton width={350} to="/the-bike">{content(["addToCartSection", "button"])}</PrimaryButton>
            </InformationPage>
          </div>
        </div>
      </Container>
    </SecondaryBackgroundWrapper>
  )
}
