import { useState } from 'react'
import { styled } from 'styled-components'

const Popup = ({children, trigger}) => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <ButtonWrapper onClick={()=>setOpen(!open)}>
        {trigger}
    </ButtonWrapper>
    <StyledPopup open={open}>
        {children}
    </StyledPopup>
    </>
  )
}

export default Popup

const StyledPopup = styled.dialog`
    border-radius: 0.5rem;
    padding: 0.5rem;
    border: 1px solid hsla(0, 0%, 0%, 0.5);

&::backdrop {
    background-color: hsla(0, 0%, 0%, 0.5);
}
`

const ButtonWrapper = styled.button`
    background-color: transparent;
    border: none;
    position: relative;
    width: fit-content;
    padding: 0.33rem;
    &:hover {
        cursor: pointer;
    }
`;
