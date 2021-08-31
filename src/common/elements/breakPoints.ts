import styled from "styled-components"
import { BREAK_POINTS } from "../constants"

export const SmallDeviceDisplayNone = styled.div`
  @media (max-width: ${BREAK_POINTS.SMALL_DEVICE}) {
    display: none;
  }
`;

export const DisplaySmallDevice = styled.div`
  @media (min-width: ${BREAK_POINTS.SMALL_DEVICE}) {
    display: none;
  }
`