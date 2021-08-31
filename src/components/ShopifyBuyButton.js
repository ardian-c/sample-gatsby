import React, { Fragment } from "react"
import shopifyBuy from "@shopify/buy-button-js"
import styled from "styled-components"
import { COLORS, FONT_FAMILY } from "../common/constants"

const BUTTON_WIDTH = "280px"
const BUTTON_HEIGHT = "44px"
const ButtonWrapper = styled.div`
  button {
    width: ${({ width }) => width ? width : BUTTON_WIDTH};
    height: ${BUTTON_HEIGHT};
    background-color: ${COLORS.PRIMARY};
    border: 1px solid ${COLORS.PRIMARY};
    border-radius: 5px;
    font-family: ${FONT_FAMILY};
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 900;
    color: #ffffff;
    line-height: 2.33;
    letter-spacing: 0.53px;
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;
    margin-bottom: 22px;
    margin-top: 22px;
  }
  button:hover {
    background-color: ${COLORS.BUTTON_PRIMARY_HOVER};
    color: ${COLORS.PRIMARY};
  }
`

class ShopifyBuyButton extends React.Component {
  constructor(props) {
    super(props)
    this.shopifyProductRef = React.createRef()
  }

  componentDidMount() {
    this.showKatanaProduct()
  }

  showKatanaProduct = () => {
    if (window && window.document) {
      let client = shopifyBuy.buildClient({
        domain: 'shop.strydebike.com',
        storefrontAccessToken: '994bb712e70fe0f310c96ec3bafecb74'
      })
      const uiBuilder = shopifyBuy.UI.init(client)
      const productId = '4360010170448'

      uiBuilder.createComponent("product", {
        id: productId,
        options: {
          product: {
            text: {
              button: "Add To Cart",
            },
            iframe: false,
            buttonDestination: "cart",
            layout: "vertical",
            ...shopifyProducApperanceConfig,
          },
          cart: {
            styles: {
              button: {
                "background-color": "#fcb335",
              },
              icon: {
                "background-color": "#fcb335",
              },
            },
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "#fcb335",
                ":hover": {
                  "background-color": "#fcb335",
                },
              },
            },
          },
        },
        node: document.getElementById("buy-button"),
      })
    }
  }

  render() {
    const { width } = this.props
    return (
      <Fragment>
        <ButtonWrapper width={width} id="buy-button"></ButtonWrapper>
      </Fragment>
    )
  }
}

// Link for all default config values: https://github.com/Shopify/buy-button-js/blob/master/src/defaults/components.js
// Link for custom templates: https://github.com/Shopify/buy-button-js/blob/master/src/templates/product.js
const shopifyProducApperanceConfig = {
  contents: {
    img: false,
    title: false,
    variantTitle: false,
    price: false,
    options: false,
    quantity: false, // determines whether to show any quantity inputs at all
    quantityIncrement: false, // button to increase quantity
    quantityDecrement: false, // button to decrease quantity
    quantityInput: false, // input field to directly set quantity
    button: true,
    description: false,
  },
  // templates: pointToCustomTemplate.js,
}

export default ShopifyBuyButton
