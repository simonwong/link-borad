import React, { useState } from 'react'
import { render } from 'react-dom'

import './index.css'

const App = () => {
  const [themeSource, setThemeSource] = useState('System')

  return (
    <div>
      <p>
        Current theme source: <strong id="theme-source">{themeSource}</strong>
      </p>

      <button
        type="button"
        id="toggle-dark-mode"
        onClick={async () => {
          const isDarkMode = await window.darkMode.toggle()
          setThemeSource(isDarkMode ? 'Dark' : 'Light')
        }}
      >
        Toggle Dark Mode
      </button>
      <button
        type="button"
        id="reset-to-system"
        onClick={async () => {
          await window.darkMode.system()
          setThemeSource('System')
        }}
      >
        Reset to System Theme
      </button>
    </div>
  )
}

render(<App />, document.getElementById('root'))
