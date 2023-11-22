import styled from 'styled-components'
import { useColorVariants } from '../public/ComponentSyles'

const Loader = ({color = 'Blue', thickness = '0.5rem', size = '5rem', backdrop = true, position = 'center'}) => {
    const loaderColor = useColorVariants(color)
    console.log(position);
    const loaderPosition = () => {
      switch (position.toLowerCase()) {
        case 'right': return 'flex-end'
        case 'left': return 'flex-start'
        case 'center': return 'center'
        default: return 'center'          
      }
    }
  return (
    <Wrapper backdrop={backdrop} position={loaderPosition}>
        <StyledLoader color={loaderColor.base} thickness={thickness} size={size} />
    </Wrapper>
  )
}
export default Loader

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: ${props => props.backdrop ? 'fixed' : 'relative'};
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 0.75rem;
    background-color: ${props => props.backdrop ? 'hsla(0, 0%, 0%, 0.25)' : 'transparent'};
    display: grid;
    place-items: center ${props => props.position};
`
const StyledLoader = styled.div`
 height: ${props => props.size};
 max-height: 90%;
  padding: ${props => props.thickness};
  background: ${props => props.color};
  aspect-ratio: 1;
  border-radius: 50%;
  --_m: 
    conic-gradient(#0000,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: load 1s linear infinite;

@keyframes load {
  to{transform: rotate(1turn)}
}
`