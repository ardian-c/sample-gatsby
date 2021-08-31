import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import "../styles/portal.scss"
import HelmetEx from "../components/helmet-ex"
import { graphql } from "gatsby"
import { MainSection } from "../components/styled/common-styled"
import {
  Content,
  TopSection,
  Title,
  ReviewTitle,
  ReviewTitleSection,
  ReviewDate,
  ReviewsContainer,
  ReviewContainer,
} from "../components/styled/rating-styled"
import Rating from "../components/rating"
import { format } from "date-fns"

export const Reviews = ({ data }) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const {
      reviews: { nodes },
    } = data
    setReviews(nodes.reverse())
  }, [data])

  function htmlDecode(input) {
    var e = document.createElement("textarea")
    e.innerHTML = input
    // handle case of empty input
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue
  }

  const formatData = (date) => {
    let formatedDate
    try {
      formatedDate = format(new Date(date), "MMMM dd, yyyy")
    } catch (error) {
      return "-"
    }
    return formatedDate
  }

  return (
    <div>
      <Layout>
        <HelmetEx>
          <div metadata="title">Reviews</div>
          <div metadata="keywords">
            indoor cycling, indoor cycle, interactive bike, streaming classes,
            virtual classes, stryde, stryde bike, virtual workouts, reviews
          </div>
          <div metadata="path">/faq</div>
          <div metadata="description">
            Access indoor cycling classes from country's top studios on an
            interactive bike at your home
          </div>
        </HelmetEx>
        <MainSection>
          <div className="container">
            <Title>Reviews</Title>
            <ReviewsContainer>
              {reviews.map((review) => (
                <ReviewContainer key={review.email}>
                  <TopSection>
                    <ReviewTitleSection>
                      <ReviewTitle> {review.name}</ReviewTitle>
                      <ReviewDate>{formatData(review.createdAt)}</ReviewDate>
                    </ReviewTitleSection>
                    <Rating rating={review.score} isInteger={true} />
                  </TopSection>
                  {/* {review.name} */}
                  <Content>{htmlDecode(review.content)}</Content>
                </ReviewContainer>
              ))}
            </ReviewsContainer>
          </div>
        </MainSection>
      </Layout>
    </div>
  )
}

export default Reviews

export const query = graphql`
  query {
    reviews: allYotpoProductReview {
      nodes {
        productIdentifier
        score
        updatedAt
        createdAt
        sentiment
        votesUp
        votesDown
        title
        name
        email
        reviewerType
        content
      }
    }
  }
`
