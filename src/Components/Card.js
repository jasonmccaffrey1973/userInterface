import styled from 'styled-components'

/** ----------------------------------------------------------------- 
 * @param {*} color
 * @param {*} size
 * @param {*} text
 * @param {*} action
 * @returns  CardButton component
 * @description CardButton component 
 * @example 
 *  <CardButton color='Primary' size='md' text='Click Me' action={() => console.log('Clicked')} /> 
 ** ------------------------------------------------------------------ */
const CardButton = (button) => {
    const {color, size, text, action} = button.button;
    return (
        <CardActionButton className={`bttn bttn-${color} bttn-${size}`} onClick={action}>{text}</CardActionButton>
    )
}

/** -----------------------------------------------------------------
 * @param {*} image 
 * @param {*} title
 * @param {*} text
 * @param {*} button 
 * @param {*} orentation
 * @returns  Card component
 * @description Card component
 * @example 
 * <Card image={image} title={title} text={text} button={
 *  {
 *   color: 'Primary',
 *   size: 'md',
 *   text: 'Click Me',
 *   action: () => console.log('Clicked'),
 *  }
 * } 
 * orentation={'horz' || 'vert' || 'auto'} />
 ** ------------------------------------------------------------------ */
export const Card = ({image, title, text, button, orentation = 'auto'}) => {
  return (
    <StyledCard orentation = {orentation}>
        <img src={image} alt='' className="card-image" />
        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{text}</p>
        </div>
        <div className="card-action">
            <CardButton button={button} />
        </div>
    </StyledCard>
  )
}

export default Card


const StyledCard = styled.div`
    --_fs: 1rem;
    display: grid;
    grid-template-columns: ${props => props.orentation === 'horz' ? '1fr 1fr auto' : props.orentation === 'vert' ? '1fr' : '1fr'};
    grid-template-rows: ${props => props.orentation === 'horz' ? '1fr' : props.orentation === 'vert' ? '1fr 1fr auto' : '1fr'};
    grid-template-areas: ${props => props.orentation === 'horz' ? '"image content action"' : props.orentation === 'vert' ? '"image" "content" "action"' : '"image" "content" "action"'};
    position: relative;
    width: ${props => props.orentation === 'horz' ? '32rem' : props.orentation === 'vert' ? '18rem' : '18rem'};
    height: ${props => props.orentation === 'horz' ? '18rem' : props.orentation === 'vert' ? '32rem' : '32rem'};
    border-radius: calc(var(--_fs) * 0.25);
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    aspect-ratio: ${props => props.orentation === 'horz' ? '16 / 9' : props.orentation === 'vert' ? '9 / 16' : '1 / 1'};
    isolation: isolate;
    .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        z-index: -1;
    }
    .card-content {
        grid-area: content;
        position: relative;
        padding-block: 0.5rem;
        background-color: rgba(0,0,0,0.5);
        backdrop-filter: blur(5px);
        color: #fff;
        z-index: 1;
        .card-title {
            margin: 0;
            padding: 0 0.5rem;
            font-size: calc(var(--_fs) * 1.25);
            font-weight: 500;
            border-bottom: 1px solid rgba(255,255,255,0.5);
        }
        .card-text {
            font-size: calc(var(--_fs) * 0.9);
            line-height: calc(var(--_fs) * 1.2);
            padding-inline: 0.5rem;
        }  
    }
    .card-action {
        grid-area: action;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background-color: rgba(0,0,0,0.5);
        backdrop-filter: blur(5px);
        z-index: 1;
    }

`

const CardActionButton = styled.button`
    padding: 0.25rem 1rem;


`