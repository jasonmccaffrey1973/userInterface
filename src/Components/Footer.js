// import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { footerMenu } from '../Application/Constants/menus'

const Footer = () => {
    const menu = footerMenu
  return (
    <footer>
        <FooterElements>
            <li className="footer-column">

            </li>
            {(menu && menu.length > 0) && menu.map((item, index) => {
                const {title, links} = item
                return (
                    <li className="footer-column" key={index}>
                        <h2>{title}</h2>
                        <ul className='column-links-wrapper'>
                            {links.map((link, linkIndex) => {
                                const {url, label} = link
                                return (
                                    <li className="link-wrapper" key={`${index}-${linkIndex}`}>
                                        <a className='footer-link' href={url}>{label}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                )
            })}
        </FooterElements>
    </footer>
  )
}
export default Footer

const FooterElements = styled.ul`
margin: 0;
padding: 0;
padding-block: 2rem;
list-style: none;
width: min(98%, 75rem);
margin-inline: auto;
display: flex;
flex-wrap: wrap;
gap: 2rem;
justify-content: space-between;
.footer-column h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-block: 0.67rem 0.33rem;
}

.column-links-wrapper {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer-link {
    font-size: 1rem;
    font-weight: 400;
    color: rgba(50, 50, 50, 1.00);
    text-decoration: none;
    transition: all 0.2s ease-in-out;
}

.footer-link:hover {
    text-decoration: underline;
}
`