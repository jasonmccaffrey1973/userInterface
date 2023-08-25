import { styled } from "styled-components"

/** ----------------------------------------------------------------
 *  Conversion of Bootstrap colors to CSS variables
 * @param {*} color 
 * @returns CSS variable
 * ----------------------------------------------------------------- */
const bootstrapColor = (color) => {
    switch (color) {
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
            return 'var(--Primary)'
    }
}

const textSizes = (size) => {
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
    color: var(--PrimaryLight);
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

