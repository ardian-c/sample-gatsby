import React from "react"
import { graphql } from "gatsby"
import PartnerPage from '../components/partner/PartnerPage';

const PrimeCycle = ({ data }) => {
  return (
    <PartnerPage data={data} partnerId={'primeCycle'} />
  )
}

export default PrimeCycle
export const query = graphql`
 query {
    nextStudioShape: file(relativePath: { eq: "home/shape-next-studio.png" }) {
      childImageSharp {
        fixed{
          ...GatsbyImageSharpFixed
        }
      }
    }
    primeCycleLogo: file(relativePath: { eq: "prime-cycle/prime-cycle-logo.png" }) {
      childImageSharp {
        fixed(width:192){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`