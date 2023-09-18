import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export const Carousel = ({ items }) => {
  const [position, setPosition] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  const totalElements = items.length;
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const elementWidth = carousel.querySelector('li').clientWidth;
    const elementsDisplayed = Math.floor(carousel.clientWidth / elementWidth);
    setAtEnd(elementsDisplayed + position === totalElements);
  }, [position, totalElements]);

  const slide = (scrollDirection) => {
    const elementWidth = carouselRef.current.querySelector('li').clientWidth;
    const scroll = scrollDirection === 1 ? elementWidth : -elementWidth;
    setPosition((prevPosition) => prevPosition + scrollDirection);
    carouselRef.current.scrollTo({
      left: carouselRef.current.scrollLeft + scroll,
      behavior: 'smooth',
    });
  };

  return (
    <CarouselWrapper>
      {position !== 0 && (
        <CarouselButton className="prev" onClick={() => slide(-1)} />
      )}
      <StyledCarousel ref={carouselRef}>
        {items.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </StyledCarousel>
      {!atEnd && (
        <CarouselButton className="next" onClick={() => slide(1)} />
      )}
    </CarouselWrapper>
  );
};


export default Carousel

const CarouselWrapper = styled.div`
  position: relative;
  margin-block: 1rem;
  &:hover .prev, &:hover .next {
    opacity: 1;
  }
`


const StyledCarousel = styled.ul`
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  margin: 0;
  padding: 0;
  gap: 1rem;
  overflow-x: scroll;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 1rem;
  & > * {
    scroll-snap-align: start;
  }
  &::-webkit-scrollbar {
    display: none; /* hide scrollbar */
    /* width: 0px;
    background: transparent; make scrollbar transparent */
    -ms-overflow-style: none; /* hide scrollbar on IE and Edge */
    scrollbar-width: none; /* hide scrollbar on Firefox */
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
