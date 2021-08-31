import React, { useState } from "react"
import useContent from "../../../hooks/useContent"
import { Container, VerticalSpacer } from "../../../common/elements"
import { TestimonialText } from "./elements"
import { MediaShowcase, MediaOutlets } from '../components'

export const CompanyTestimonials = () => {
  const { content } = useContent("home")
  const sectionKey = "companyTestimonialSection";
  const [mediaOutletSelected, setMediaOutletSelected] = useState<MediaOutlets>(MediaOutlets.FORBES)

  return (
    <Container>
      <VerticalSpacer extraExtraLarge />
      <TestimonialText>{content([sectionKey, mediaOutletSelected])}</TestimonialText>
      <VerticalSpacer extraLarge />
      <VerticalSpacer extraLarge />
      <MediaShowcase selectMediaOutlet={setMediaOutletSelected} mediaOutletSelected={mediaOutletSelected} />
      <VerticalSpacer extraExtraLarge />
    </Container>
  )
}
