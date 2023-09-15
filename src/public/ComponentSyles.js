import { darken, lighten } from "polished"
import { styled } from "styled-components"
import { useThemeContext } from "../Contexts/ThemeContext"


/** ----------------------------------------------------------------
 *  Conversion of Bootstrap colors to CSS variables
 * @param {*} color 
 * @returns CSS variable
 * ----------------------------------------------------------------- */
export const bootstrapColor = (color) => {
    switch (color.toLowerCase()) {
        case 'primary':
            return 'var(--Primary)'
        case 'secondary':
            return 'var(--Secondary)'
        case 'success':
            return 'var(--Green)'
        case 'danger':
            return 'var(--Red)'
        case 'warning':
            return 'var(--Orange)'
        case 'info':
            return 'var(--Yellow)'
        default:
            return `var(--${color})`
    }
}

/** ----------------------------------------------------------------
 * Conversion text size to CSS variable
 * @param {*} size (xs, sm, md, lg, xl)
 * @returns CSS variable
 * ----------------------------------------------------------------- */
export const textSizes = (size) => {
    switch (size) {
        case 'xs':
            return 'var(--TextXSmall)'
        case 'sm':
            return 'var(--TextSmall)'
        case 'md':
            return 'var(--TextMedium)'
        case 'lg':
            return 'var(--TextLarge)'
        case 'xl':
            return 'var(--TextXLarge)'
        default:
            return 'var(--TextLarge)'
    }
}

/** ----------------------------------------------------------------
 * Conversion Hex color to HSL
 * @param {*} hex 
 * @returns HSL color
 * @example hexToHSL('#FF0000') // returns 'hsl(0, 100%, 50%)'
 * ----------------------------------------------------------------- */
function hexToHSL(hex) {
    // Remove the '#' if it's present
    hex = hex.replace(/^#/, '');
  
    // Parse the hexadecimal values for red, green, and blue
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
  
    // Find the minimum and maximum values among r, g, and b
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
  
    // Calculate the hue
    let h, s, l = (max + min) / 2;
  
    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: // Handle unexpected cases, if any
          console.warn("Unexpected case in hexToHSL conversion.");
      }
      h /= 6;
    }
  
    // Convert h, s, and l to percentages
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
  
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

/** ----------------------------------------------------------------
 * returns color variants for a given base color
 * @param {*} baseColor
 * @returns object with base, hover, and contrast colors
 * @example colorVariants('primary') // returns { base: 'hsl(210, 100%, 50%)', hover: 'hsl(210, 100%, 40%)', contrast: 'hsl(0, 0%, 100%)' }
 * ----------------------------------------------------------------- */
  export const useColorVariants = (baseColor) => {
    const {themeColors} = useThemeContext()
    const sanitizedColor = bootstrapColor(baseColor).replace('var(--', '').replace(')', '')
    // const CSSColor = getComputedStyle(document.documentElement).getPropertyValue(sanitizedColor).trim()
    const CSSColor = themeColors[sanitizedColor]
    const colorMatch = CSSColor.match(/^hsla?\(\s*(\d+),\s*(\d+)%,\s*(\d+)%,\s*(\d*\.?\d*)\)$/);
  
    if (colorMatch) {
      const isLightColor = parseFloat(colorMatch[3]) >= 50; // Check if lightness is above 50%
      const contrastColor = isLightColor ? 'hsla(0, 0%, 0%, 1)' : 'hsla(0, 0%, 100%, 1)';
      const hoverColor = hexToHSL(isLightColor ? darken(0.1, CSSColor) : lighten(0.1, CSSColor));
      return {
        base: CSSColor,
        hover: hoverColor,
        contrast: contrastColor,
      };
    } else {
      return {
        base: CSSColor,
        hover: 'hsla(0, 0%, 50%, 1)',
        contrast: 'hsla(0, 0%, 0%, 1)',
      };
    }
  };
  
  

/** ----------------------------------------------------------------
 * @description Styled components
 * ----------------------------------------------------------------- */
export const StyledSVG = styled.svg`
    fill: ${props => props.fill};
    height: ${props => props.height};
    aspect-ratio: 1/1;
    transition: fill 0.2s ease-in-out;
    &:hover {
      fill: ${props => props.hover};
    }` 


export const ButtonWrapper = styled.button`
    background-color: transparent;
    border: none;
    position: relative;
    width: fit-content;
    padding: 0.33rem;
    &:hover {
        cursor: pointer;
    }
`;

export const DivWrapper = styled.div`
    background-color: transparent;
    border: none;
    position: relative;
    width: fit-content;
    margin-inline: 0.33rem;
    &:hover {
        cursor: pointer;
    }
`;

export const Button = styled.button`
    background-color: ${props => props.color ? bootstrapColor(props.color) : 'var(--Primary)'};
    color: var(--White);
    border: hsla(0, 0%, 0%, 0.1) 1px solid;
    position: relative;
    width: fit-content;
    padding: 0.33rem 0.66rem;
    box-shadow: 0 0.25rem 0.5rem hsla(0, 0%, 0%, 0.25);
    font-size: ${props => textSizes(props?.size)};
    transition: background-color 250ms ease-in-out, color 150ms ease-in-out 100ms, box-shadow 250ms ease-in-out;
    letter-spacing: 0.05rem;
    min-width: 8rem;
    &:hover, &:focus {
        cursor: pointer;
        background-color: var(--Accent);
        color: var(--Text);
        box-shadow: inset 0 0.25rem 0.5rem hsla(0, 0%, 0%, 0.5);
        outline: none;
    }
`;

