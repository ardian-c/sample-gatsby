import React from 'react';
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const PrevStudioComponent = ({ prevPartner }) => {
    const data = useStaticQuery(graphql`
    query {
       nextStudioShape: file(relativePath: { eq: "home/shape-next-studio.png" }) {
         childImageSharp {
           fixed{
             ...GatsbyImageSharpFixed
           }
         }
       }
     }
   `);

    return (
        <div className="next-studio-position">
            <p>BACK</p>
            <ul>
                <li className="ml-2 rotate">
                    <Link to={prevPartner.studioUrl}>
                        <Img fixed={data.nextStudioShape.childImageSharp.fixed} alt="prev studio" />
                    </Link>
                </li>
                <li className="ml-2">
                    <Link to={prevPartner.studioUrl}>{prevPartner.name}</Link>
                </li>
            </ul>
        </div>
    );
}
export default PrevStudioComponent;