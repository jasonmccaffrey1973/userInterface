import { styled } from "styled-components"

export const StyledSVG = styled.svg`
    fill: ${props => props.fill};
    height: ${props => props.height};
    aspect-ratio: 1/1;
    transition: fill 0.2s ease-in-out;
    &:hover {
      fill: ${props => props.hover};
    }`