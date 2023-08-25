import { useCallback, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { Render } from '../Application/Utilities/Render'
import { Button, ButtonWrapper } from '../public/ComponentSyles'

const Popup = ({children, trigger, header = {title: 'Modal', showClose: true}}) => {
    const [open, setOpen] = useState(false)
    const popupRef = useRef()

/** ----------------------------------------------------------------
 * @description Listens for clicks outside the Modal dialog to close it
 * @param {Event} e
 * @returns void
 * ----------------------------------------------------------------- */
    const listenBackdrop = useCallback((e) => {
        const dialogDimensions = popupRef.current.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) setOpen(false)
    }, [popupRef])

/** ----------------------------------------------------------------
 * @description Handles the submit button click
 * @returns void
 * ----------------------------------------------------------------- */
    const handleSubmit = () => {
        console.log('Submit clicked')
        setTimeout(()=>setOpen(false), 1000)
        }
        
/** ----------------------------------------------------------------
 * @description Adds the event listener for the Modal dialog
 * @returns void
 * ----------------------------------------------------------------- */
    useEffect(() => {     
        const dialog = popupRef.current
        if (open) {
            dialog.addEventListener('click', listenBackdrop)
            dialog.showModal()
        }  else {
            dialog.removeEventListener('click', listenBackdrop)
            dialog.close()
        } 
        return () => {
            dialog.removeEventListener('click', listenBackdrop)
        }
    }
    , [open, popupRef, listenBackdrop])

/** ----------------------------------------------------------------
 * @description Renders the Modal dialog
 * @returns JSX
 * ----------------------------------------------------------------- */
  return (
    <>
    <ButtonWrapper onClick={()=>setOpen(!open)}>
        {trigger}
    </ButtonWrapper>
    <StyledPopup ref={popupRef}>
        <ModalHeader>
            <ModalTitle className='title'>{header.title}</ModalTitle>
            <Render if={header.showClose}>
                <HeaderClose className='close' onClick={()=>setOpen(!open)}>&times;</HeaderClose>
            </Render>
        </ModalHeader>
        <ModalBody>
            {children}
        </ModalBody>
        <ModalFooter>
            <Button color='success' className='submit' onClick={()=>handleSubmit()}>Submit</Button>
            <Button color='danger' className='close' onClick={()=>setOpen(!open)}>Close</Button>
        </ModalFooter>
    </StyledPopup>
    </>
  )
}

export default Popup

/** ----------------------------------------------------------------
 * @description Styled components
 * ----------------------------------------------------------------- */
const StyledPopup = styled.dialog`
    border-radius: 0.2rem;
    padding: 0;
    padding-block: 0.5rem 1rem;
    border: none;
    box-shadow: 0 0 0.5rem hsla(0, 0%, 0%, 0.5);
    width: min(90vw, 80ch);
    > * {
        padding-inline: 1rem;
    }
&::backdrop {
    background-color: hsla(0, 0%, 0%, 0.66);
}
`;

const ModalHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: 'title close';
    border-bottom: 1px solid hsla(0, 0%, 66%, 0.5);
    position: relative;
    .title {
        grid-area: title;
    }
    .close {
        grid-area: close;
    }
`;

const ModalTitle = styled.h2`
    margin: 0;
    margin-block: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
`;

const HeaderClose = styled.button`
    position: absolute;
    top: -0.25rem;
    right: 0;
    display: grid;
    place-items: center;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    font-weight: 300;
    aspect-ratio: 1;
    color: var(--Text);
    transition: color 250ms ease-in-out;
    &:hover, &:focus {
        cursor: pointer;
        color: var(--Accent);
        outline: none;
    }
`;

const ModalBody = styled.div`
    padding-block: 0.5rem;
    line-height: 1.5;
`;

const ModalFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: 'submit close';
    border-top: 1px solid hsla(0, 0%, 66%, 0.5);
    padding-block-start: 0.5rem;
    .submit {
        grid-area: submit;
    }
    .close {
        grid-area: close;
    }
`;