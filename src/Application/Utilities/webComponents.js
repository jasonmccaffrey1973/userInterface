import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import App from '../../App'

class ReactRoot extends HTMLElement {
  connectedCallback() {
    const reactRoot = this.reactInit()
    this.appendChild(reactRoot)
  }

  reactInit() {
    const element = document.createElement('div')
    const appRoot = createRoot(element)
    appRoot.render(
      <React.StrictMode>
        <App />          
      </React.StrictMode>
    );
    return element;
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this)
  }
}

export default ReactRoot
