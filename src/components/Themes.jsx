import React from 'react'
import './Themes.css'

const Themes = ({ selectedTheme, setSelectedTheme }) => {
  const themes = {
    light: [
      { name: 'Matte Ivory', bg: '#f5f5dc', fg: '#2c2c2c' },
      { name: 'Fogstone', bg: '#e8e8e8', fg: '#3a3a3a' },
      { name: 'Matte Copper Light', bg: '#f4e4d7', fg: '#5d4e37' },
      { name: 'Slate Mist', bg: '#d3d9de', fg: '#2f4f4f' },
      { name: 'Rose Linen', bg: '#f9e4e1', fg: '#8b4c4c' },
      { name: 'Peach Mist', bg: '#ffe5d9', fg: '#8b5a3c' }
    ],
    dark: [
      { name: 'Graphite', bg: '#2c2c2c', fg: '#e0e0e0' },
      { name: 'Obsidian', bg: '#1a1a1a', fg: '#d0d0d0' },
      { name: 'Midnight Azure', bg: '#1e2a3a', fg: '#b8c5d6' },
      { name: 'Charcoal Rose', bg: '#2a1f2a', fg: '#d4b5c9' },
      { name: 'Copper Dark', bg: '#2d2520', fg: '#d4a574' },
      { name: 'Velvet Noir', bg: '#1c1c1e', fg: '#c7c7cc' },
      { name: 'AMOLED Black', bg: '#000000', fg: '#ffffff' }
    ]
  }

  return (
    <section className="themes" id="themes">
      <div className="themes-container">
        <h2>Select Your Theme</h2>
        <p className="themes-subtitle">Choose from 13 stunning themes or create your own</p>
        
        <div className="theme-category">
          <h3>☀️ Light Themes</h3>
          <div className="theme-grid">
            {themes.light.map((theme, idx) => (
              <div 
                key={idx} 
                className="theme-card"
                onClick={() => setSelectedTheme(theme.name)}
              >
                <div 
                  className="theme-preview" 
                  style={{ 
                    background: theme.bg,
                    color: theme.fg,
                    border: `2px solid ${theme.fg}20`
                  }}
                >
                  <div className="theme-preview-text">Aa</div>
                </div>
                <p className="theme-name">{theme.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="theme-category">
          <h3>🌙 Dark Themes</h3>
          <div className="theme-grid">
            {themes.dark.map((theme, idx) => (
              <div 
                key={idx} 
                className="theme-card"
                onClick={() => setSelectedTheme(theme.name)}
              >
                <div 
                  className="theme-preview" 
                  style={{ 
                    background: theme.bg,
                    color: theme.fg,
                    border: `2px solid ${theme.fg}20`
                  }}
                >
                  <div className="theme-preview-text">Aa</div>
                </div>
                <p className="theme-name">{theme.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Themes
