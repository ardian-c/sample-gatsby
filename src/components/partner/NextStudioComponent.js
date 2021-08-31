import React from 'react';
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const NextStudioComponent = ({ nextPartner }) => {
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
            <p>NEXT</p>
            <ul>
                <li className="ml-2">
                    <Link to={nextPartner.studioUrl}>{nextPartner.name}</Link>
                </li>
                <li className="ml-2">
                    <Link to={nextPartner.studioUrl}>
                        <Img fixed={data.nextStudioShape.childImageSharp.fixed} alt="next studio" />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NextStudioComponent;