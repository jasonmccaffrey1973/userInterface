import { useState } from 'react'
import { styled } from 'styled-components'

const Hamburger = ({color = 'hsla(0, 0%, 0%, 1.00)', hover = color, size = '5rem'}) => {
    const [open, setOpen] = useState(false)
    console.log(color, hover, size);
  return (
    <StyledHamburgerMenu aria-expanded={open} color={color} height={size} hover={hover} onClick={()=>setOpen(!open)} >
        <div className="hamburger-menu-line top" />
        <div className="hamburger-menu-line middle" />
        <div className="hamburger-menu-line bottom" />
    </StyledHamburgerMenu>
  )
}

const StyledHamburgerMenu = styled.button`
    --height: ${props => props.height};
    background-color: transparent;
    border: none;
    display: grid;
    place-items: center;
    color: ${props => props.color};
    height: var(--height);
    aspect-ratio: 4/5;
    position: relative;
    &:hover {
      color: ${props => props.hover};
    }
    .hamburger-menu-line {
        width: 100%;
        height: calc(var(--height) / 10);
        background-color: currentColor;
        transition: transform 250ms ease-in-out 0s, opacity 50ms ease-in-out 250ms;
        border-radius: var(--height);
        position: absolute;
        }
        .top {
            transform: translateY(calc(var(--height) / -3.66));
        }
        .middle {
            opacity: 1;
        }
        .bottom {
            transform: translateY(calc(var(--height) / 3.66));
        }
    &[aria-expanded="true"] {
        .top {
            transform: translateY(0) 
            rotate(45deg);
        }
        .middle {
            opacity: 0;
        }
        .bottom {
            transform: translateY(0)
            rotate(-45deg);
        }
    }
    `

export default Hamburger