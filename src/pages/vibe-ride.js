import React from "react";
import { graphql } from "gatsby";
import PartnerPage from '../components/partner/PartnerPage';

const VideRide = ({ data }) => {
  return (
    <PartnerPage data={data} partnerId={'vibeRide'} />
  )
}

export default VideRide;
export const query = graphql`
 query {
 videRideImgOne: file(relativePath: { eq: "vibe-ride/Featured - Vibe Ride.jpg" }) {
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
    vibeRideLogo: file(relativePath: { eq: "home/vide-ride.png" }) {
      childImageSharp {
        fixed(width:192){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`