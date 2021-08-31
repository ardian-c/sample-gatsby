import React from "react";
import { graphql } from "gatsby";
import PartnerPage from '../components/partner/PartnerPage';

const CityCycle = ({ data }) => {
  return (
    <PartnerPage data={data} partnerId={'cityCycle'} />
  )
}

export default CityCycle
export const query = graphql`
 query {
     cityCycleLogo: file(relativePath: { eq: "city-cycle/CITY_CYCLE_Logo.png" }) {
      childImageSharp {
        fixed(width:192){
          ...GatsbyImageSharpFixed
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
  }
`