import React, { Fragment } from "react"
import { Star, RatingNumber, RatingContainer } from "./styled/rating-styled"
const Rating = ({ rating, isInteger }) => {
  const checkValue = (number) => {
    if (isInteger) return number
    const typecastedNumber = parseFloat(number)
    if (!typecastedNumber) return 0
    let rounded = Math.round(typecastedNumber * 10) / 10
    return rounded.toFixed(1)
  }
  return (
    <RatingContainer>
      <ShowStars rating={checkValue(rating)} />
      <ShowRating rating={checkValue(rating)} />
    </RatingContainer>
  )
}

const ShowRating = ({ rating }) => {
  return <RatingNumber>{rating}/5</RatingNumber>
}

const ShowStars = ({ rating }) => {
  const renderStars = (ratingNumber) => {
    const maxRating = 5
    const fullStars = Math.round(ratingNumber)
    const stars = []
    for (let index = 0; index < fullStars; index++) {
      stars.push(<Star className="fas fa-star" key={index} />)
    }
    for (let index = 0; index < maxRating - fullStars; index++) {
      stars.push(<Star className="far fa-star" key={index + 10} />)
    }
    return stars
  }
  return <Fragment>{renderStars(rating).map((star) => star)}</Fragment>
}

export default Rating
