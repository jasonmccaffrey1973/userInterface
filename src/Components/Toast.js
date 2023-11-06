import { useState } from "react"
import styled from "styled-components"
import { useColorVariants } from "../public/ComponentSyles"

/** -------------------------------------------------------------------------
 * @module src/Components/Toast
 * @param   {object}  position  -  Position of the toast
 * @param   {string}  position.horz  -  Horizontal position of the toast
 * @param   {string}  position.vert  -  Vertical position of the toast
 * @param   {string}  message  -  Message to display in the toast
 * @param   {string}  title  -  Title to display in the toast
 * @returns  {JSX.Element}
 * -------------------------------------------------------------------------- */

// Get the position of the toast
const getToastPostioion = (position) => {
    let top = '1rem'
    let left = '1rem'
    let translateX = '0'
    let translateY = '0'
    let animation = 'slideUp'
    if (position.vert === 'bottom') 
    {
        top = 'calc(100% - 1rem)'
        translateY = '-100%'
        animation = 'slideDown'
    }
    if (position.vert === 'center' || position.vert === 'middle' ) 
    {
        top = '50%'
        translateY = '-50%'
        animation = position.horz === 'left' ? 'slideLeft' : position.horz === 'right' ? 'slideRight' : 'fadeOut'
    }
    if (position.horz === 'center' || position.horz === 'middle' ) 
    {
        left = '50%'
        translateX = '-50%'
    }
    if (position.horz === 'right') 
    {
        left = 'calc(100% - 1rem)'
        translateX = '-100%'
    }
    return {top, left, translate: `(${translateX}, ${translateY})`, animation }
}

export const Toast = ({position = {horz: 'right', vert: 'top'}, message = '', title = '', duration = 5000, icon = '', color = 'Accent'}) => {
    const [showState, setShowState] = useState('true')
    // Hide the toast after a set duration
    setTimeout(() => setShowState('false'), duration)

    // Get the position of the toast
    const {top, left, translate, animation} = getToastPostioion(position)

  return (
    <StyledToast 
        top={top}
        left={left}
        translate={translate}
        animation={animation}
        delay={duration}
        show={showState}
        color={useColorVariants(color)}
        onClick={() => setShowState('false')}
    >
        <div className="icon">
            {icon}
        </div>
        <h3 className="toast-title">
            {title}
        </h3>        
        <p className="toast-content">
            {message}
        </p>
    </StyledToast>
  )
}

export default Toast

// Styled Components
const StyledToast = styled.div`
    --_backgroundColor: ${props => props.color.base};
    --_textColor: ${props => props.color.contrast};
    --_size: 1.66;
    --_toastPadding: calc(0.25rem * var(--_size));
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    transform: translate${props => props.translate};
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
        "icon title"
        "icon content";
    grid-gap: calc(var(--_toastPadding) / 2);
    padding: var(--_toastPadding);
    border-radius: 0.33rem;
    background-color: var(--_backgroundColor);
    color: var(--_textColor);
    box-shadow: 0.5rem 0.5rem 0.75rem hsla(0, 0%, 0%, 0.25);
    position: fixed;
    z-index: 1000;
    width: max-content;
    letter-spacing: 0.5px;
    line-height: calc((1rem * var(--_size)) + var(--_toastPadding));
    transition: background-color 250ms ease-in-out;
    animation: ${props => props.animation} 15000s linear ${props => props.delay + 'ms'}  forwards;
    .icon {
        grid-area: icon;
        display: grid;
        place-items: center;
    }
    .toast-title {
        grid-area: title;
        font-size: calc(1rem * var(--_size));
        font-weight: 600;
        margin: 0;
    }
    .toast-content {
        grid-area: content;
        font-size: calc(0.8rem * var(--_size));
        margin: 0;
    }
    &:hover {
        --_backgroundColor: ${props => props.color.hover};
        cursor: pointer;
    }

    @keyframes slideUp {
        0% {
            transform: translateY(100%);
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(0);
            opacity: 0;
        }
    }

    @keyframes slideDown {
        0% {
            transform: translateY(0);
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(100%);
            opacity: 0;
        }
    }

    @keyframes slideRight {
        0% {
            transform: translateX(-100%);
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateX(0);
            opacity: 0;
        }
    }

    @keyframes slideLeft {
        0% {
            transform: translateX(0);
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateX(-100%);
            opacity: 0;
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

`