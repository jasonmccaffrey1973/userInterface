import styled from 'styled-components'
import UserPreferences from './Application/Models/UserPreferences'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ApplicationStyles from './public/ApplicationStyles'
import { ThemeProvider } from './Contexts/ThemeContext'
import Modal from './Components/Modal'


const App = () => {
  return (
    <>
    <ThemeProvider>
      <ApplicationStyles />
      <StyledApp layout={UserPreferences.layout}>
        <Header/>
        <Footer/>
        <main>
          <Modal trigger={<span>Open Dialog</span>}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, consequuntur inventore. Ipsam rerum quae, expedita debitis tempora perspiciatis ducimus a, voluptates dolores totam commodi ad minus earum quibusdam ea hic praesentium quidem! Asperiores, corrupti. Accusantium deserunt quibusdam libero tempora id nesciunt perspiciatis veritatis, autem quam officiis voluptatum labore? Fugit eos error facilis et earum perferendis, fugiat sequi quam quis, hic ex rerum? Aliquam ducimus iusto in minima cum soluta alias, blanditiis nostrum totam nam corrupti non cupiditate dolore veritatis doloribus culpa voluptatibus, perferendis dolorum ex, distinctio eum nobis quas! Culpa omnis iusto pariatur hic voluptatem suscipit aperiam, explicabo repudiandae in eum tempore, quis provident eius voluptates vel, praesentium quos consequatur! Ipsam, autem debitis! Quos cumque voluptatibus suscipit excepturi sed sit reiciendis cum, assumenda, accusamus praesentium, voluptates vitae quaerat! Delectus quos esse optio modi officiis magnam, facilis ab temporibus, totam vel nesciunt! Pariatur consectetur voluptatum, delectus iusto perferendis officiis voluptas incidunt in excepturi nostrum, reiciendis eum, quibusdam reprehenderit sunt! Laborum sapiente quaerat architecto rerum delectus, earum culpa enim magni, asperiores reprehenderit explicabo ullam incidunt, rem consectetur voluptatibus nisi corporis eos iste voluptate eveniet numquam quos atque dolores necessitatibus. Cumque corporis nobis facilis reprehenderit! Ullam vel, iste similique voluptatibus debitis aspernatur minus?
          </Modal>
          

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
grid-template-columns: auto auto auto;
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