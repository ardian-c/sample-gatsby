import React from 'react';
import useContent from '../../../hooks/useContent';
import Img from 'gatsby-image';
import { AppDescriptionContainer, AppDownloadContainer, AppLinks } from './elements'
import { CallToActionTertiary, ParagraphSecondaryInverse, VerticalSpacer, TitleTertiaryInverse } from '../../../common/elements'

interface AppDescriptionProps {
  images: {
    appStore: any;
    playStore: any;
  }
}
export const AppDescription: React.FC<AppDescriptionProps> = ({ images }) => {
  const { content } = useContent("home");
  const sectionKey = "featuredAppSection";
  return (
    <AppDescriptionContainer>
      <TitleTertiaryInverse uppercase>
        {content([sectionKey, "title"])}
      </TitleTertiaryInverse>
      <VerticalSpacer />
      <ParagraphSecondaryInverse>
        {content([sectionKey, "description"])}
      </ParagraphSecondaryInverse>
      <VerticalSpacer />
      <CallToActionTertiary>
        {content([sectionKey, "callToAction"])}
      </CallToActionTertiary>
      <AppDownloadContainer>
        <AppLinks href={content([sectionKey, "appStoreLink"])}>
          <Img fixed={images.appStore.childImageSharp.fixed} alt="App store" />
        </AppLinks>
        <AppLinks href={content([sectionKey, "playStoreLink"])}>
          <Img fixed={images.playStore.childImageSharp.fixed} alt="Play store" />
        </AppLinks>
      </AppDownloadContainer>
      <VerticalSpacer />
    </AppDescriptionContainer>
  )
};
