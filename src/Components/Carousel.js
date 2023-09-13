import Card from "./Card"

export const Carousel = ({items}) => {

  return (
    <ul>
        <li className="card">
            <Card image={'https://picsum.photos/400/700'} title='Title 1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at cupiditate laudantium praesentium. Natus libero odio ipsam explicabo nisi repellat!' button={ {
                color: 'Primary',
                size: 'md',
                text: 'Click Me',
                action: () => console.log('Clicked'),
            }} />
        </li>
        <li className="card">
        </li>
        <li className="card">
        </li>
        <li className="card">
        </li>
    </ul>
  )
}

export default Carousel