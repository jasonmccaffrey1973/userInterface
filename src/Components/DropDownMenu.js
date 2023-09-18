import {useId, useState} from "react"
// import { Link } from "react-router-dom"
import { styled } from "styled-components"
import isFunction from "../Application/Utilities/isFunction"
import getLargestIcon from "../Application/Utilities/getLargestIcon"
import titleCase from "../Application/Utilities/titleCase"
import Hamburger from "../public/image-components/Hamburger"
import { ButtonWrapper, DivWrapper } from "../public/ComponentSyles"

/** ----------------------------------------------------------------
 * @param {*} param0 
 * @returns 
 * ----------------------------------------------------------------- */
const DropDownMenu = ({menuItems, direction, trigger, position = 'left'}) => {
    const [open, setOpen] = useState(false)
    const menuId = useId()
    const triggerType = trigger?.type?.name;
  return (
    <>
      {triggerType !== 'Hamburger' ? (
        <ButtonWrapper id={menuId} aria-expanded={open} onClick={()=>setOpen(!open)}>
          {trigger}
          <Menu menuItems={menuItems} direction={direction} position={position} open={open} setOpen={setOpen}  menuId={menuId} />
        </ButtonWrapper>
      ) : (
        <DivWrapper id={menuId} aria-expanded={open} onClick={()=>setOpen(!open)}>
          <Hamburger size={trigger.props.size} color={trigger.props.color} hover={trigger.props.hover} open={open} setOpen={setOpen} />
          <Menu menuItems={menuItems} direction={direction} position={position} open={open} setOpen={setOpen}  menuId={menuId} />
        </DivWrapper>
      )}
    </>
  )
}

/** ----------------------------------------------------------------
 * @param {*} param0 
 * @returns 
 * ----------------------------------------------------------------- */
const Menu = ({menuItems, direction, position, setOpen, menuId, open}) => {
    if (!Array.isArray(menuItems)) return (<></>)
    const largestIcon = parseFloat(getLargestIcon(menuItems)) + 'rem'
    return (
        <StyledMenu direction={direction} position={position} aria-expanded={open}>
        {menuItems.map((item, index) => {
            return (
                <MenuItem key={`${menuId}-${index}`} item={item} setOpen={setOpen} iconsize={largestIcon} />
            )
        })}
    </StyledMenu>
    )
}

/** ----------------------------------------------------------------
 * @param {*} param0 
 * @returns 
 * ----------------------------------------------------------------- */
const MenuItem = ({ item, setOpen, iconsize }) => {
    const itemId = useId();
    const icon = item?.icon ? item.icon : ' ';
    const label = item?.label ? item.label : item.title ? item.title : ' ';
  
    return (
      <StyledMenuItem key={itemId} iconsize={iconsize} onClick={() => {
        setOpen(false);
        isFunction(item.clickFn) && item.clickFn();
      }}>
        <div className="icon">
          {icon}
        </div>
        <div className="label">{titleCase(label)}</div>
      </StyledMenuItem>
    );
  };
  

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
    background-color: var(--Secondary);
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
   --icon-size: ${props => props.iconsize || '2.5rem'};
  min-height: 2.5rem;
  transition: box-shadow 250ms ease-in-out;
  .icon {
    grid-area: icon;
    display: grid;
    place-items: center;
    height: 100%;
    width: var(--icon-size);
    padding-inline: 1rem;
    border-right: 1px solid hsla(0, 0%, 0%, 0.1);
    background-color: rgba(0, 0, 0, 0.075);
    transition: background-color 250ms ease-in-out;
  }
  .label {
    font-size: 1rem;
    grid-area: text;
    display: grid;
    place-items: center start;
    height: 100%;
    white-space: nowrap;
    padding-inline-start: 0.5rem;
    transition: background-color 250ms ease-in-out;
    color: var(--Text);
  }
  &:hover {
    --hover-color: var(--Accent);
    box-shadow: inset 0.125rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.15);
    .label {
      background-color: var(--hover-color);
      opacity: 0.75;
    }
    .icon {
      background-color: var(--hover-color);
      border-right: 1px solid hsla(0, 0%, 0%, 0.0);
    }
  }
`;


export default DropDownMenu