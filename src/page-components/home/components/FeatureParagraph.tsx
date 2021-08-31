import React from 'react';
import Img from 'gatsby-image';
import useContent from '../../../hooks/useContent';
import { ParagraphTitle, ParagraphSecondary } from '../../../common/elements'
import { FeatureParagraphContainer, FeatureParagraphImgContainer } from './elements';

interface FeatureParagraphProps {
  image: any;
  contentKey: string;
}
export const FeatureParagraph: React.FC<FeatureParagraphProps> = ({ image, contentKey }) => {
  const { content } = useContent("home")
  const sectionKey = "bikeFeatureSection";
  return (
    <FeatureParagraphContainer>
      <FeatureParagraphImgContainer>
        <Img fixed={image.childImageSharp.fixed} />
      </FeatureParagraphImgContainer>
      <ParagraphTitle>
        {content([sectionKey, contentKey, "title"])}
      </ParagraphTitle>
      <ParagraphSecondary center>
        {content([sectionKey, contentKey, "description"])}
      </ParagraphSecondary>
    </FeatureParagraphContainer>
  )
};
