import ReactRoot from './Application/Utilities/webComponents'

window.customElements.define('react-root', ReactRoot)

document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.createElement('react-root')
  document.body.appendChild(appElement)
})