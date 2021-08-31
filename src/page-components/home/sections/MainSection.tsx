import React, { useRef, useEffect } from "react"
import videojs from "video.js"
import "video.js/dist/video-js.css"
import useContent from "../../../hooks/useContent"
import {
  ButtonWrapper,
  DescriptionMain,
  HeaderContainer,
  HeaderWrapper,
  Title,
  VideoOverlay,
} from "./elements"
import { PrimaryButton } from '../../../common/components'
import { HorizontalSpacer, SmallDeviceDisplayNone, DisplaySmallDevice } from '../../../common/elements'

const videoUrl = `https://df13rcxn3mrxv.cloudfront.net/www/stryde-bike-playlist.m3u8`
const localDevVideoUrl =
  "https://katana-website-qa.s3.amazonaws.com/www/stryde-bike-playlist.m3u8"
const videoOptions = {
  autoplay: true,
  loop: true,
  muted: true,
  playsinline: true,
  // preload: true,
  sources: [
    {
      src: localDevVideoUrl,
      type: "application/x-mpegURL",
    },
  ],
}

interface MainSectionProps { }

const ButtonWidth = 200;
const MobileWidth = 160;

export const MainSection: React.FC<MainSectionProps> = () => {
  const { content } = useContent("home")
  const videoNode = useRef<HTMLVideoElement | null>(null)
  const player = useRef({ dispose: () => { } })

  useEffect(() => {
    const videoElement = videoNode.current ? videoNode.current : ""
    player.current = videojs(videoElement, videoOptions)
    return () => {
      if (player.current) {
        player.current.dispose()
      }
    }
  }, [])
  return (
    <section className={`main-section`}>
      <VideoOverlay />
      <video
        ref={(node) => (videoNode.current = node)}
        className="home-video"
      />
      <HeaderContainer>
        <HeaderWrapper>
          <Title>{content(["mainSection", "primary"])}</Title>
          <SmallDeviceDisplayNone>
            <DescriptionMain>
              {content(["mainSection", "descriptionFirst"])}
              <br></br>
              {content(["mainSection", "descriptionSecond"])}
            </DescriptionMain>
            <ButtonWrapper>
              <PrimaryButton width={ButtonWidth} to="/the-bike">{content(["mainSection", "exploreBikeButton"])}</PrimaryButton>
              <HorizontalSpacer extraLarge />
              <PrimaryButton width={ButtonWidth} to="#FeaturedAppSection">{content(["mainSection", "tryAppButton"])}</PrimaryButton>
            </ButtonWrapper>
          </SmallDeviceDisplayNone>
          <DisplaySmallDevice>
            <DescriptionMain>
              {`${content(["mainSection", "descriptionFirst"])} `}
              {content(["mainSection", "descriptionSecond"])}
            </DescriptionMain>
            <ButtonWrapper>
              <PrimaryButton width={MobileWidth} to="/the-bike">{content(["mainSection", "exploreBikeButton"])}</PrimaryButton>
              <HorizontalSpacer />
              <PrimaryButton width={MobileWidth} to="#FeaturedAppSection">{content(["mainSection", "tryAppButton"])}</PrimaryButton>
            </ButtonWrapper>
          </DisplaySmallDevice>
        </HeaderWrapper>
      </HeaderContainer>
    </section>
  )
}
