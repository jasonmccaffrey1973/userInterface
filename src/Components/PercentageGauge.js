import React from 'react'
import styled from 'styled-components'
import { bootstrapColor } from '../public/ComponentSyles'

const PercentageGauge = ({value = '0' , color = 'info'}) => {
    const gaugeColor = bootstrapColor(color)
    const valueInt = parseInt(value) > 100 ? 100 : parseInt(value) < 0 ? 0 : parseInt(value)
  return (
    <StyledPercentageGauge value={valueInt} color={gaugeColor} />
  )
}

export default PercentageGauge

const StyledPercentageGauge = styled.div
`
    aspect-ratio: 1;
    border-radius: 50%;
    position: relative;
    height: 4rem;
    background: conic-gradient(${props => props.color} ${props => props.value}%, transparent ${props => props.value}% 100%);
    box-shadow: inset 0 0.1rem 0.75rem hsla(0, 0%, 0%, 0.25);
    margin: 0.5rem;
    &::before {
        content: '${props => props.value}%';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.0rem;
        font-weight: 700;
        color: var(--Text);
        background-color: var(--Secondary);
        aspect-ratio: 1;
        height: 3rem;
        border-radius: 50%;
        border: 1px solid hsla(0, 0%, 0%, 0.1);
        box-shadow: 0 0.25rem 0.5rem hsla(0, 0%, 0%, 0.25);
    }
`