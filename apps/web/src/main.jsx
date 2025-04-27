// apps/web/src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './AppRoutes'

// Utility: convert any invalid aria-hide → aria-hidden
function stripInvalidAria() {
  document.querySelectorAll('[aria-hide]').forEach(el => {
    const v = el.getAttribute('aria-hide')
    el.setAttribute('aria-hidden', v)
    el.removeAttribute('aria-hide')
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  // after initial mount, clean up any already-injected aria-hide
  stripInvalidAria()
)

// watch for any new aria-hide attributes and fix them on the fly
const observer = new MutationObserver(stripInvalidAria)
observer.observe(document.body, {
  subtree: true,
  attributes: true,
  attributeFilter: ['aria-hide']
})
