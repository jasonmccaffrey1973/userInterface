import {useId, useState} from "react"
// import { Link } from "react-router-dom"
import { styled } from "styled-components"
import isFunction from "../Application/Utilities/isFunction"

/** ----------------------------------------------------------------
 * @param {*} param0 
 * @returns 
 * ----------------------------------------------------------------- */
const DropDownMenu = ({menuItems, direction, trigger, position = 'left'}) => {
    const [open, setOpen] = useState(false)
    const menuId = useId()
    console.log('direction', direction, 'position', position);
  return (
    <MenuWrapper id={menuId}>
        <div className="menuTrigger" onClick={() => setOpen((prev) => (!prev))}>
            {trigger}
        </div>
    <StyledMenu direction={direction} position={position} aria-expanded={open}>
        {menuItems.map((item, index) => {
            return (
                <MenuItem key={`${menuId}-${index}`} item={item} setOpen={setOpen} />
            )
        })}
    </StyledMenu>
    </MenuWrapper>
  )
}

/** ----------------------------------------------------------------
 * @param {*} param0 
 * @returns 
 * ----------------------------------------------------------------- */
const MenuItem = ({item, setOpen}) => {
    const itemId = useId()
    return (
        <StyledMenuItem key={itemId} onClick={()=>{
            setOpen(false)
            isFunction(item.clickFn) && item.clickFn()
        }}>
            <div className="icon">{item.icon ? item.icon : ''}</div>
            <div className="label">{item.label}</div>
        </StyledMenuItem>
    )
}

/** ----------------------------------------------------------------
 * @param {*} direction 
 * @returns CSS transform origin
 * ----------------------------------------------------------------- */
const directionProps = ({direction, position}) => {
    const cssObj = {}
    cssObj[position] = 0
    switch (direction) {
        case 'up':
            return { ...cssObj,
                transformOrigin: 'bottom',
                transform: 'scaleY(0)',
            }
        case 'down':
            return { ...cssObj,
                transformOrigin: 'top',
                transform: 'scaleY(0)',
            }
        default:
            return { ...cssObj,
                transformOrigin: 'top',
                transform: 'scaleY(0)'
            }   
        }
    }


/** ----------------------------------------------------------------
 * Styled Components
 * ----------------------------------------------------------------- */
const MenuWrapper = styled.div`
    position: relative;
    width: fit-content;
    padding: 0.33rem;
    &:hover {
        cursor: pointer;
    }
`;

const StyledMenu = styled.ul`
    margin: 0;
    margin-block: 0.5rem;
    padding: 0;
    min-width: 12rem;
    list-style: none;
    ${props => directionProps({direction: props.direction, position: props.position})}
    transform: scaleY(0);
    position: absolute;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
    background-color: hsla(0, 0%, 100%, 1.00);
    z-index: 100;
    transition: transform 250ms ease-in-out;
    &[aria-expanded="true"] {
        transform: scaleY(1)
    }
    li {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto;
        grid-template-areas: "icon text";
        align-items: center;
    }
`;


const StyledMenuItem = styled.li`
    min-height: 2.5rem;
    .icon {
        grid-area: icon;
        display: grid;
        place-items: center;
        height: 100%;
        padding: 0 0.66rem;
        border-right: 1px solid hsla(0, 0%, 0%, 0.1);
        background-color: rgba(0,0,0,0.075);
        transition: background-color 250ms ease-in-out;
    }
    .label {
        grid-area: text;
        display: grid;
        place-items: center start;
        height: 100%;
        white-space: nowrap;
        padding-inline-start: 0.5rem;
        transition: background-color 250ms ease-in-out;
    }
    &:hover {
        .label {
            background-color: hsla(0, 0%, 0%, 0.05);
        }
        .icon {
            background-color: hsla(0, 0%, 0%, 0.05);
            border-right: 1px solid hsla(0, 0%, 0%, 0.0);
        }
    }
`;

export default DropDownMenu