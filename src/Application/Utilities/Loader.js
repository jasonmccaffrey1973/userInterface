// import React from 'react'
import { styled } from 'styled-components'

const Loader = ({loaderThickness = '1rem', loaderColor = 'hsl(204, 57%, 53%)', loaderSize = '5rem'}) => {
  return (
    <StyledLoaderWrapper loaderThickness = {loaderThickness} loaderColor = {loaderColor} loaderSize = {loaderSize} >
        <div className="loader" />
    </StyledLoaderWrapper>
  )
}

export default Loader

const StyledLoaderWrapper = styled.div`
    --loaderThickness: props => props.loaderThickness;
    --loaderColor: props => props.loaderColor;
    --loaderSize: props => props.loaderSize;
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;

    .loader {
        border: var(--loaderThickness) solid var(--loaderColor);
        border-top: var(--loaderThickness) solid transparent;
        border-radius: 50%;
        height: var(--loaderSize);
        width: var(--loaderSize);
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`
