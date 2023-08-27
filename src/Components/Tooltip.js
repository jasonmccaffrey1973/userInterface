import { styled } from "styled-components";

export const Tooltip = ({children, tooltip}) => {

  return (
    <TooltipWrapper>
        <span className='tooltip-trigger'>
            {children}
        </span>
        <TooltipDaialog>{tooltip}</TooltipDaialog>
    </TooltipWrapper>
  )
}

export default Tooltip;


const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  .tooltip-trigger {
    border-bottom: 1px dotted black;
    cursor: help;
    &:hover + dialog {
        opacity: 0.8;
    }
  }
`;

const TooltipDaialog = styled.dialog`
display: flex;
flex-wrap: wrap;
margin: 0;
padding: 0.5rem;
width: max-content;
max-width: 20ch;
border: ipx solid hsla(0, 0%, 0%, 0.15);
border-radius: 0.5rem;
background-color: var(--Text);
color: var(--Primary);
opacity: 0;
position: absolute;
transition: opacity 250ms ease-in-out 250ms;
letter-spacing: 0.05rem;
font-size: 0.8rem;
line-height: 1.2rem;
&:hover {
    opacity: 0.8;
    cursor: help;
}
 `;