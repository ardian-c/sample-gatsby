import React from "react";
import { SlickSlider } from "./elements"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
}

export const TestimonialSlider: React.FC<{}> = ({ children }) => {
  return (
    <SlickSlider {...settings}>
      {children}
    </SlickSlider>
  )
}