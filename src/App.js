import styled from 'styled-components'
import UserPreferences from './Application/Models/UserPreferences'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ApplicationStyles from './public/ApplicationStyles'
import { ThemeProvider } from './Contexts/ThemeContext'
import Calendar from './Components/Calendar'


const App = () => {
  const columns = UserPreferences.layout.split(' ').length
  return (
    <>
    <ThemeProvider>
      <ApplicationStyles />
      <StyledApp layout={UserPreferences.layout} columns={columns}>
        <Header/>
        <Footer/>
        <main>
          <Calendar />
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
min-height: 100dvh;
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(${props => props.columns}, auto);
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