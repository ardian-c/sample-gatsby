import styled from "styled-components"
import { Link } from "gatsby"
import { BREAK_POINTS, COLORS, FONT_FAMILY } from '../constants'

export const SimpleLink = styled.a`
  :hover{
    text-decoration: none;
  }
`

export const GatsbyLink = styled(Link)`
  :hover{
    text-decoration: none;
  }
`

export const PrimaryButtonElement = styled.div<{ width: number | undefined }>`
  width: ${({ width }) => width ? `${width}px` : '100%'};
  height: 48px;
  background-color: ${COLORS.PRIMARY};
  border-radius: 5px;
  color: ${COLORS.PRIMARY_BUTTON_TEXT};
  border: 1px solid ${COLORS.PRIMARY};
  font-size: 15px;
  font-weight: 800;
  font-family: ${FONT_FAMILY};
  font-style: normal;
  font-stretch: normal;
  padding: 8px;
  line-height: 2.33;
  letter-spacing: 0.53px;
  text-align: center;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :hover{
    background-color: ${COLORS.PRIMARY_BUTTON_HOVER_BACKGROUND};
    border: 1px solid ${COLORS.PRIMARY};
    color: #fcb335;
    }
  }
  @media (max-width: ${BREAK_POINTS.SMALL_DEVICE}) {
    font-size: 14px;
  }
`