import React, { useRef, useEffect } from 'react';
import Forbes from '../../../images/testimonial-companies/forbes.svg'
import BusinessInsider from '../../../images/testimonial-companies/business-insider.svg'
import Entrepreneur from '../../../images/testimonial-companies/entrepreneur.svg'
import Filtrated from '../../../images/testimonial-companies/filtrated.svg'
import MensHealth from '../../../images/testimonial-companies/mens-health.svg'
import ForbesSelected from '../../../images/testimonial-companies/forbes-selected.svg'
import BusinessInsiderSelected from '../../../images/testimonial-companies/business-insider-selected.svg'
import EntrepreneurSelected from '../../../images/testimonial-companies/entrepreneur-selected.svg'
import FiltratedSelected from '../../../images/testimonial-companies/filtrated-selected.svg'
import MensHealthSelected from '../../../images/testimonial-companies/mens-health-selected.svg'
import { MediaShowcaseContainer } from './elements'

export enum MediaOutlets {
  FORBES = "forbes",
  BUSINESS_INSIDER = "businessInsider",
  FILTRATED = "filtrated",
  MENS_HEALTH = "mensHealth",
  ENTERPRENEUR = "enterpreneur"
}

interface MediaShowcaseProps {
  selectMediaOutlet: (mediaOutlet: MediaOutlets) => void,
  mediaOutletSelected: MediaOutlets
}

const MediaImage = (mediaOutlet: MediaOutlets, mediaOutletSelected: MediaOutlets) => {
  const isSelected = mediaOutlet === mediaOutletSelected
  switch (mediaOutlet) {
    case MediaOutlets.FORBES:
      return isSelected ? ForbesSelected : Forbes;
    case MediaOutlets.BUSINESS_INSIDER:
      return isSelected ? BusinessInsiderSelected : BusinessInsider;
    case MediaOutlets.FILTRATED:
      return isSelected ? FiltratedSelected : Filtrated;
    case MediaOutlets.MENS_HEALTH:
      return isSelected ? MensHealthSelected : MensHealth;
    case MediaOutlets.ENTERPRENEUR:
      return isSelected ? EntrepreneurSelected : Entrepreneur;
    default:
      return ForbesSelected;
  }
}

export const MediaShowcase: React.FC<MediaShowcaseProps> = ({ selectMediaOutlet, mediaOutletSelected }) => {
  const centerElementRef = useRef(null)
  useEffect(() => {
    if (centerElementRef.current) {
      centerElementRef.current.scrollIntoView()
    }
  }, [centerElementRef])
  return (
    <MediaShowcaseContainer>
      <img src={MediaImage(MediaOutlets.FILTRATED, mediaOutletSelected)} onClick={() => selectMediaOutlet(MediaOutlets.FILTRATED)} />
      <img src={MediaImage(MediaOutlets.BUSINESS_INSIDER, mediaOutletSelected)} onClick={() => selectMediaOutlet(MediaOutlets.BUSINESS_INSIDER)} />
      <img src={MediaImage(MediaOutlets.FORBES, mediaOutletSelected)} onClick={() => selectMediaOutlet(MediaOutlets.FORBES)} />
      <img ref={centerElementRef} src={MediaImage(MediaOutlets.MENS_HEALTH, mediaOutletSelected)} onClick={() => selectMediaOutlet(MediaOutlets.MENS_HEALTH)} />
      <img src={MediaImage(MediaOutlets.ENTERPRENEUR, mediaOutletSelected)} onClick={() => selectMediaOutlet(MediaOutlets.ENTERPRENEUR)} />
    </MediaShowcaseContainer>
  )
};
