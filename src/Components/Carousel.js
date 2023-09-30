import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Render } from "../Application/Utilities/Render";

export const Carousel = ({ items, kind = 'carousel' }) => {
  const [position, setPosition] = useState(0);
  const [atEnd, setAtEnd] = useState(false); 
  const totalElements = items.length;
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const elementWidth = carousel.querySelector('li').clientWidth;
    const elementsDisplayed = Math.floor(carousel.clientWidth / elementWidth);
    const atEnd = elementsDisplayed + position === totalElements;
    setAtEnd(atEnd);
  }, [position, totalElements]);

  const slide = ({scrollDirection}) => {
    const elementWidth = carouselRef.current.querySelector('li').clientWidth;
    const positionOffset = scrollDirection === 'right' ? 1 : -1;
    const newPosition = position + positionOffset;
    if (newPosition >= 0 && newPosition < totalElements) {
      setPosition(newPosition);
      carouselRef.current.scrollTo({
        left: newPosition * elementWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <CarouselWrapper>
      {position !== 0 && (
        <CarouselButton className="prev" onClick={() => slide({scrollDirection: 'left'})} />
      )}
      <StyledCarousel ref={carouselRef}>
        {items.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </StyledCarousel>
      {!atEnd && (
        <CarouselButton className="next" onClick={() => slide({scrollDirection: 'right'})} />
      )}
      <Render if={kind === 'carousel' }>
        <PositionIndicatorWrapper>
          {items.map((item, index) => (
            <CarouselPositionIndicator
              key={index}
              activeslide={position === index ? 'true' : 'false'}
              onClick={() => setPosition(index)}
            />
          ))}
        </PositionIndicatorWrapper>
      </Render>
    </CarouselWrapper>
  );
};



export default Carousel

const CarouselWrapper = styled.div`
  position: relative;
  margin-block: 1rem;
  overflow: hidden;
  max-width: 70dvw;
  &:hover .prev, &:hover .next {
    opacity: 1;
  }
`


const StyledCarousel = styled.ul`
list-style: none;
display: flex;
margin: 0;
padding: 0;
gap: 1rem;
overflow-x: hidden;
scroll-snap-type: inline mandatory;
scroll-padding-inline: 1rem;
  & > * {
    scroll-snap-align: start;
  }
`

const CarouselButton = styled.button`
  --_size: 4rem;
  --_button-margin: 0.5rem;
  position: absolute;
  top: 50%;
  z-index: 100;
  width: var(--_size);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: hsla(0, 0%, 0%, 0.5);
  border: none;
  outline: none;
  cursor: pointer;
  display: grid;
  transform-origin: center;
  place-items: center;
  opacity: 0;
  transition: opacity 250ms ease-in-out, background-color 250ms ease-in-out;
  border: 1px solid hsla(0, 0%, 100%, 0.33);
  &::before {
    content: '';
    display: block;
    width: calc(var(--_size) * 0.4);
    aspect-ratio: 1 / 1;
    border-top: 0.25rem solid hsla(0, 0%, 100%, 0.75);
    border-left: 0.25rem solid hsla(0, 0%, 100%, 0.75);
    transform: translate(12.5%, 12.5%);
  }
  &.prev{
    left: var(--_button-margin);
    transform: translateY(-50%) rotate(315deg);
    box-shadow: 0.25rem 0.25rem 0.25rem hsla(0, 0%, 0%, 0.40);
  }
  &.next{
    right: var(--_button-margin);
    transform: translateY(-50%) rotate(135deg);
    box-shadow: -0.25rem -0.25rem 0.25rem hsla(0, 0%, 0%, 0.40);
  }
  &:hover {
    background-color: hsla(0, 0%, 0%, 0.75);
  }
  `

  const PositionIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-block: 1.5rem 0.5rem;
  gap: 0.5rem;
  `

  const CarouselPositionIndicator = styled.button`
  --_size: 4.5;
  display: block;
  width: calc((var(--_size) * 0.5) * 1rem);
  height: 0.6666rem;
  border: 1px solid hsla(0, 0%, 0%, 0.333);
  border-radius: calc(var(--_size) * 0.125rem);
  background-color: ${props => props.activeslide === 'true' ? 'var(--Primary)' : 'var(--Secondary)'};
  cursor: pointer;
  pointer-events: ${props => props.activeslide === 'true' ? 'none' : 'auto'};
  transition: background-color 250ms ease-in-out;
  &:hover {
    background-color: var(--Accent);
    opacity: 0.4;
  }
  &:focus-visible {
    outline: 2px solid var(--Accent);
  }
  `
