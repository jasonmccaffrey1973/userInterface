// import React from 'react'
import { styled } from 'styled-components'
import Gear from '../public/image-components/Gear'
import DropDownMenu from './DropDownMenu'
import Pencil from '../public/image-components/Pencil'
import Profile from '../public/image-components/Profile'
import Hamburger from '../public/image-components/Hamburger'
import { headerMenu } from '../Application/Constants/menus'
import House from '../public/image-components/House'

/** ----------------------------------------------------------------
 *  @returns
 * ----------------------------------------------------------------- */
const OptionMenu = [
  {
    label: 'View Profile',
    icon: <Profile  size='1rem' color='hsla(0, 0%, 40%, 1.00)' />,
    clickFn: () => alert('View Profile')
  },
  {
    label: 'Edit Profile',
    icon: <Pencil size='1rem' color='hsla(0, 0%, 40%, 1.00)' />,
    clickFn: () => alert('Edit Profile')
  },
]

/** ----------------------------------------------------------------
 * @returns
 * ----------------------------------------------------------------- */
const Header = () => {
  return (
    <StyledHeader>
      <div className="left">
      <DropDownMenu 
          menuItems={headerMenu}
          direction='down'
          position='left'
          trigger={<Hamburger size='1.8rem' color='hsla(0, 0%, 40%, 1.00)' hover='hsla(0, 0%, 20%, 1.00)' />}
        />
      </div>
      <div className="center"></div>
      <div className="right">
        <DropDownMenu 
          menuItems={OptionMenu}
          direction='down'
          position='right'
          trigger={<Gear size='1.8rem' color='hsla(0, 0%, 40%, 1.00)' hover='hsla(0, 0%, 20%, 1.00)' />}
        />
      </div>
    </StyledHeader>
  )
}

/** ----------------------------------------------------------------
 * Styled Components
 * ----------------------------------------------------------------- */
const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;
  grid-template-areas: "left center right";
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.15);
  padding: 0.5rem 1rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.15);
  height: 3.5rem;
  width: 100%;
  margin: 0;
  margin-block-end: 0.5rem;
  
  .left {
    grid-area: left;
  }

  .center {
    grid-area: center;
  }

  .right {
    grid-area: right;
  }
  
`

export default Header