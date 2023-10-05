import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useColorVariants } from '../public/ComponentSyles'

const Loader = ({color = 'Danger'}) => {
    const [start, setStart] = useState(1)

    useEffect(() => {
        
        const gap = Math.floor(Math.random() * 45) + 1;
        setTimeout(() => {
            if (start + gap > 360) {
                setStart(pre => parseInt(pre + gap - 360))
                
            } else {
                setStart(pre => parseInt(pre + gap))
            }
        }, parseInt(360));
    }, [start])


    const loaderColor = useColorVariants(color)
  return (
    <Wrapper>
        <StyledLoader color={loaderColor.base} value={start} />
    </Wrapper>
  )
}

export default Loader

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1000;
    background-color: hsla(0, 0%, 0%, 0.25);
`

const StyledLoader = styled.div`
    --_size: 10rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(${props => props.value}deg);
    aspect-ratio: 1;
    border-radius: 50%;
    position: relative;
    height: var(--_size);
    background: conic-gradient(${props => props.color} ${props => props.value}%, transparent ${props => props.value}% 100%);
    box-shadow: inset 0 0.1rem 0.75rem hsla(0, 0%, 0%, 0.25);
    margin: 0.5rem;
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        aspect-ratio: 1;
        height: calc(var(--_size) * .7);
        border-radius: 50%;
        border: 1px solid hsla(0, 0%, 0%, 0.1);
        box-shadow: 0 0.25rem 0.5rem hsla(0, 0%, 0%, 0.25);
        background-color: hsla(0, 0%, 80%, 1);
    }
`