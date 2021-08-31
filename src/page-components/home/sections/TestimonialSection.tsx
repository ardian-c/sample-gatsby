import React from "react"
import useContent from "../../../hooks/useContent"
import { SecondaryBackgroundWrapper, TestimonialSliderWrapper, TestimonialText, TestimonialWrapper } from './elements'
import { Container, VerticalSpacer, TitleTertiary, TitleSecondary } from '../../../common/elements'
import { TestimonialSlider } from '../components'


interface Testimonial {
  content: string;
  name: string;
}
export const TestimonialSection = () => {
  const { content } = useContent("home")
  const sectionKey = "testimonialSection";
  return (
    <SecondaryBackgroundWrapper>
      <Container>
        <VerticalSpacer extraLarge />
        <TitleSecondary>
          {content([sectionKey, "title"])}
        </TitleSecondary>
        <VerticalSpacer extraLarge />
        <TestimonialSliderWrapper>
          <TestimonialSlider>
            {content([sectionKey, "testimonials"]).map((testimonial: Testimonial) => (
              <TestimonialWrapper>
                <TestimonialText>
                  {testimonial.content}
                </TestimonialText>
                <VerticalSpacer />
                <TitleTertiary center>
                  {testimonial.name}
                </TitleTertiary>
              </TestimonialWrapper>
            ))}
          </TestimonialSlider>
        </TestimonialSliderWrapper>
        <VerticalSpacer extraLarge />
        <VerticalSpacer />
      </Container>
    </SecondaryBackgroundWrapper>
  )
}
