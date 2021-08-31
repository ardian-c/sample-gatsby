import React from "react"
import { graphql } from "gatsby"
import PartnerPage from '../components/partner/PartnerPage';

const Studios = ({ data }) => {
  return (
    <PartnerPage data={data} partnerId={'highRide'} />
  )
}

export default Studios
export const query = graphql`
 query {
 highRideCycleImgOne: file(relativePath: { eq: "high-ride-cycle/high-ride-cycle-img-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2520, quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
   nextStudioShape: file(relativePath: { eq: "home/shape-next-studio.png" }) {
      childImageSharp {
        fixed{
          ...GatsbyImageSharpFixed
        }
      }
    }
      highRide: file(relativePath: { eq: "home/high-ride.png" }) {
      childImageSharp {
        fixed(width:192){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`