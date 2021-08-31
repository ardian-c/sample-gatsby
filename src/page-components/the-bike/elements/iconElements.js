import React from "react"
import styled from "styled-components"

import checkImage from "./images/check.svg"
import freeDeliveryImage from "./images/free-delivery.svg"
import returnImage from "./images/return.svg"
import strydeLogo from "./images/stryde-logo.svg"
import playBoxImage from "./images/play-box.svg"
import bikeBoxImage from "./images/bike-box.svg"
import familyBoxImage from "./images/family-box.svg"
import upArrowImage from "./images/up-arrow.svg"
import downArrowImage from "./images/down-arrow.svg"
import tinyCheckImage from "./images/tiny-check.svg"
import tinyCloseImage from "./images/tiny-close.svg"

const ExtraSmallIcon = styled.img`
  height: 8px;
  margin: 0;
`

const SmallIcon = styled.img`
  height: 16px;
  font-size: 0.8rem;
  margin: 0 8px 0 0;
`

const MediumIcon = styled.img`
  height: 60px;
  font-size: 0.8rem;
  margin: 0;
`

const Logo = styled.img`
  height: 32px;
  margin: 20px 0;
`
export const UpArrow = () => (
  <ExtraSmallIcon src={upArrowImage} alt="Up arrow" />
)
export const DownArrow = () => (
  <ExtraSmallIcon src={downArrowImage} alt="Down arrow" />
)

export const TinyCheck = () => (
  <ExtraSmallIcon src={tinyCheckImage} alt="Check" />
)
export const TinyClose = () => (
  <ExtraSmallIcon src={tinyCloseImage} alt="Close" />
)

export const Check = () => <SmallIcon src={checkImage} alt="check" />
export const FreeDelivery = () => (
  <SmallIcon src={freeDeliveryImage} alt="FreeDelivery" />
)
export const ReturnIcon = () => <SmallIcon src={returnImage} alt="Return" />

export const StrydeLogo = () => <Logo src={strydeLogo} alt="Stryde" />

export const PlayBoxLogo = () => (
  <MediumIcon src={playBoxImage} alt="Play box" />
)

export const BikeBoxLogo = () => (
  <MediumIcon src={bikeBoxImage} alt="Bike box" />
)

export const FamilyBoxLogo = () => (
  <MediumIcon src={familyBoxImage} alt="Family box" />
)
