import styled from 'styled-components'
import UserPreferences from './Application/Models/UserPreferences'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ApplicationStyles from './public/ApplicationStyles'
import { ThemeProvider } from './Contexts/ThemeContext'


const App = () => {
  return (
    <>
    <ThemeProvider>
      <ApplicationStyles />
      <StyledApp layout={UserPreferences.layout}>
        <Header/>
        <Footer/>
        <main>Main</main>
        <aside>Secondary Sidebar</aside>
        <aside className="sidebar">Primary Sidebar</aside>
      </StyledApp>
    </ThemeProvider>
    </>
  )
}

export default App

const StyledApp = styled.div`
margin: 0;
min-height: 100dvh;
width: 100%;
height: 100%;
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto 1fr auto;
grid-template-areas: ${props => props.layout};
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
}

> footer {
  grid-area: footer;
}

> main {
  grid-area: main;
}
> aside {
  grid-area: secondary-sidebar;  
}
.sidebar {
  grid-area: primary-sidebar;
}
`