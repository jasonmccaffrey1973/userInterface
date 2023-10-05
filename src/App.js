import styled from 'styled-components'
import UserPreferences from './Application/Models/UserPreferences'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ApplicationStyles from './public/ApplicationStyles'
import { ThemeProvider } from './Contexts/ThemeContext'
import Card from './Components/Card'
import Toast from './Components/Toast'
import PercentageGauge from './Components/PercentageGauge'
import Loader from './Components/Loader'


const App = () => {

  const getColumnData = () => {
    let mainPos = null;
    const rows = UserPreferences.layout.split("' '");
    rows.forEach(row => {
      const columns = row.split(' ');
      if (columns.includes('main') && !mainPos) mainPos = columns.indexOf('main');
    });
    const columnLayout = rows.map((row, rowIndex) => {
      const columns = row.split(' ');
      return columns.map((column, index) => (index === mainPos && rowIndex === 0) ? '1fr' : 'auto');
    });
  
    const flattenedLayout = columnLayout[0].flat().join(' ');
  
    return {
      layout: flattenedLayout,
      columns: flattenedLayout.split(' ').length
    };
  };
  

  const carouselItems = [
    <Card 
      image={'https://source.unsplash.com/random/700x700'}
      title='Title 1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at cupiditate laudantium praesentium. Natus libero odio ipsam explicabo nisi repellat!'
      button={ {
        color: 'Accent',
        size: 'md', 
        text: 'Click Me',
        action: () => console.log('Clicked'),
      }} />,
    <Card image={'https://source.unsplash.com/random/200x200'} title='Title 1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at cupiditate laudantium praesentium. Natus libero odio ipsam explicabo nisi repellat!' button={ {
        color: 'Accent',
        size: 'md', 
        text: 'Click Me',
        action: () => console.log('Clicked'),
    }} />,          
    <Card image={'https://source.unsplash.com/random/500x300'} title='Title 1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at cupiditate laudantium praesentium. Natus libero odio ipsam explicabo nisi repellat!' button={ {
        color: 'Accent',
        size: 'md', 
        text: 'Click Me',
        action: () => console.log('Clicked'),
    }} />,          
    <Card image={'https://source.unsplash.com/random/220x700'} title='Title 1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at cupiditate laudantium praesentium. Natus libero odio ipsam explicabo nisi repellat!' button={ {
        color: 'Accent',
        size: 'md', 
        text: 'Click Me',
        action: () => console.log('Clicked'),
    }} />,          
    <Card image={'https://source.unsplash.com/random/600x800'} title='Title 1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at cupiditate laudantium praesentium. Natus libero odio ipsam explicabo nisi repellat!' button={ {
        color: 'Accent',
        size: 'md', 
        text: 'Click Me',
        action: () => console.log('Clicked'),
    }} />,          
    <Card image={'https://source.unsplash.com/random/250x400'} title='Title 1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at cupiditate laudantium praesentium. Natus libero odio ipsam explicabo nisi repellat!' button={ {
        color: 'Accent',
        size: 'md', 
        text: 'Click Me',
        action: () => console.log('Clicked'),
    }} />
  ];

  return (
    <>
    <ThemeProvider>
      <ApplicationStyles />
      <StyledApp layout={UserPreferences.layout} columns={getColumnData()}>
        <Header/>
        <Footer/>
        <main>
          <Toast position={{horz: 'right', vert: 'bottom'}} message='This is a toast message' title='Toast Title' duration={5000} />
          {/* <PercentageGauge value={12} color='Indigo' /> */}
          <Loader />
        </main>
        <aside>Secondary Sidebar</aside>
        <aside className="sidebar">Primary Sidebar</aside>
      </StyledApp>
    </ThemeProvider>
    </>
  )
}

export default App

const StyledApp = styled.div`
--spacer: 0.5rem;
margin: 0;
width: 100%;
max-width: 100dvw;
height: 100%;
min-height: 100dvh;
display: grid;
grid-template-columns: ${props => props.columns.layout};
grid-template-rows: auto 1fr auto;
grid-template-areas: ${props => props.layout};
position: relative;
> header, > footer {
  height: fit-content;
  min-height: 4rem;
  background-color: var(--Primary);
  color: var(--Text);
  display: grid;
  align-items: center;
  padding-inline: 0.67rem;
  padding-block-end: 0.5rem;
}
> header {
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 100;
}

> footer {
  grid-area: footer;
}

> main {
  grid-area: main;
  background-color: var(--Secondary);
  color: var(--Text);
  padding-block: var(--spacer);
  width: min(100%, 80rem);
  max-width: 80rem;
  margin-inline: auto;
}
> aside {
  grid-area: secondary-sidebar;
  padding-block: var(--spacer);  
}
.sidebar {
  grid-area: primary-sidebar;
  padding-block: var(--spacer);
}
`