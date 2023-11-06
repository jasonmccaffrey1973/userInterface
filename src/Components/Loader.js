import styled from 'styled-components'
import { useColorVariants } from '../public/ComponentSyles'

const Loader = ({color = 'Blue', thickness = '0.5rem', size = '5rem'}) => {
    const loaderColor = useColorVariants(color)
  return (
    <Wrapper>
        <StyledLoader color={loaderColor.base} thickness={thickness} size={size} />
    </Wrapper>
  )
}
export default Loader

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: hsla(0, 0%, 0%, 0.25);
    display: grid;
    place-items: center;
`
const StyledLoader = styled.div`
 width: ${props => props.size};
  padding: ${props => props.thickness};
  background: ${props => props.color};
  box-shadow: inset 0 0.1rem 0.75rem hsla(0, 0%, 0%, 0.25);
  aspect-ratio: 1;
  border-radius: 50%;
  --_m: 
    conic-gradient(#0000,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  box-sizing: border-box;
  animation: load 1s linear infinite;

@keyframes load {
  to{transform: rotate(1turn)}
}
`