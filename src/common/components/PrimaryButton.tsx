import React from "react"
import { GatsbyLink, PrimaryButtonElement, SimpleLink } from "../elements"

interface PrimaryButtonProps {
  children: string;
  to: string;
  width?: number;
}
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  to,
  width,
}) => {
  const uppercase = (text: string): string => {
    return text.toUpperCase()
  }
  return (
    <GatsbyLink to={to} >
      <PrimaryButtonElement width={width}>{uppercase(children)}</PrimaryButtonElement>
    </GatsbyLink>
  )
}
