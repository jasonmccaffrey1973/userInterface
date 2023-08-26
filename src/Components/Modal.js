import { useCallback, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { Render } from '../Application/Utilities/Render'
import { Button, ButtonWrapper } from '../public/ComponentSyles'
import isFunction from '../Application/Utilities/isFunction'

/** ----------------------------------------------------------------
 * @description Renders a Modal dialog
 * @param {Object} props
 * @param {JSX} props.children
 * @param {JSX} props.trigger
 * @param {string} props.size - 'sm', 'md', 'lg'
 * @param {Object} props.header
 * @param {string} props.header.title
 * @param {boolean} props.header.showClose
 * @param {Object} props.footer
 * @param {boolean} props.footer.showFooter
 * @param {boolean} props.footer.showSubmit
 * @param {boolean} props.footer.showClose
 * @param {string} props.footer.submitLabel
 * @param {string} props.footer.closeLabel
 * @returns JSX
 * ----------------------------------------------------------------- */
const Modal = ({
    children, 
    trigger,
    size = 'md',
    header = {
        title: 'Modal', showClose: true
    }, 
    footer = {
        showFooter: true, showSubmit: true, showClose: true, submitLabel: 'Submit', closeLabel: 'Close'
    }, 
    onOpen = null,
    onClose = null,
    onSubmit = null
}) => {
    const [open, setOpen] = useState(false)
    const ModalRef = useRef()

/** ----------------------------------------------------------------
 * @description Listens for clicks outside the Modal dialog to close it
 * @param {Event} e
 * @returns void
 * ----------------------------------------------------------------- */
    const listenBackdrop = useCallback((e) => {
        const dialogDimensions = ModalRef.current.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) setOpen(false)
    }, [ModalRef])

/** ----------------------------------------------------------------
 * @description Handles the submit button click
 * @returns void
 * ----------------------------------------------------------------- */
const handleSubmit = useCallback(() => {
    if (!onSubmit || !isFunction(onSubmit)) return
    onSubmit()
    setOpen(false)
}
, [onSubmit])

/** ----------------------------------------------------------------
 *  @description Handles the Modal dialog open event
 *  @returns void 
 * ----------------------------------------------------------------- */
    const handleClose = useCallback((dialog) => {
        dialog.close()
        if (!onClose || !isFunction(onClose)) return
        onClose()
    }
    , [onClose])

/** ----------------------------------------------------------------
 *  @description Handles the Modal dialog open event
 *  @returns void 
 * ----------------------------------------------------------------- */
    const handleOpen = useCallback((dialog) => {
        dialog.showModal()
        if (!onOpen || !isFunction(onOpen)) return
        onOpen()
    }
    , [onOpen])

/** ----------------------------------------------------------------
 * @description Handles the Modal dialog click
 * ----------------------------------------------------------------- */
    const handleModalClick = useCallback((e) => {
        listenBackdrop(e)
    }, [listenBackdrop])

        
/** ----------------------------------------------------------------
 * @description Adds the event listener for the Modal dialog
 * @returns void
 * ----------------------------------------------------------------- */
    useEffect(() => {  
        const dialog = ModalRef.current
        if (open) {
            handleOpen(dialog)
            dialog.addEventListener('click', e=>handleModalClick(e))  
        } else {
            handleClose(dialog)
            dialog.removeEventListener('click', e=>handleModalClick(e))
        } 
        return () => {
            dialog.removeEventListener('click', e=>handleModalClick(e))
        }
    }
    , [open, ModalRef, listenBackdrop, handleModalClick, handleOpen, handleClose])

/** ----------------------------------------------------------------
 * @description Renders the Modal dialog
 * @returns JSX
 * ----------------------------------------------------------------- */
  return (
    <>
    <ButtonWrapper onClick={()=>setOpen(!open)}>
        {trigger}
    </ButtonWrapper>
    <StyledModal ref={ModalRef} size={size}>
        <ModalHeader>
            <ModalTitle className='title'>{header.title}</ModalTitle>
            <Render if={header.showClose}>
                <HeaderClose className='close' onClick={()=>setOpen(false)}
                >&times;</HeaderClose>
            </Render>
        </ModalHeader>
        <ModalBody>
            {children}
        </ModalBody>
        <Render if={footer.showFooter}>
            <ModalFooter>
                <Render if={footer.showSubmit}>
                    <Button color='success' className='submit' onClick={()=>handleSubmit()}>{footer.submitLabel}</Button>
                </Render>
                <Render if={footer.showClose}>
                    <Button color='danger' className='close' onClick={()=>setOpen(false)}>{footer.closeLabel}</Button>
                </Render>
            </ModalFooter>
        </Render>
    </StyledModal>
    </>
  )
}

export default Modal

/** -----------------------------------------------------------------
 * @param {*} size  - 'sm', 'md', 'lg', 'xl'
 * @returns  string size of the Modal dialog in CSS ch units
 * ----------------------------------------------------------------- */
const getModalSize = (size) => {
    switch (size) {
        case 'sm':
            return '60ch'
        case 'md':
            return '80ch'
        case 'lg':
            return '100ch'
        case 'xl':
            return '120ch'
        default:
            return '80ch'
    }
}

/** ----------------------------------------------------------------
 * @description Styled components
 * ----------------------------------------------------------------- */
const StyledModal = styled.dialog`
    border-radius: 0.2rem;
    padding: 0;
    padding-block: 0.5rem 1rem;
    border: none;
    box-shadow: 0 0 0.5rem hsla(0, 0%, 0%, 0.5);
    background-color: var(--Secondary);
    color: var(--Text);
    width: min(90vw,  ${props => props.size ? getModalSize(props.size) : '80ch'});
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