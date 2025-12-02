import React from 'react'
import './Screenshots.css'

const Screenshots = () => {
  const screenshots = Array(10).fill(null).map((_, i) => ({
    id: i + 1,
    alt: `VITVerse Screenshot ${i + 1}`
  }))

  return (
    <section className="screenshots">
      <div className="screenshots-container">
        <div className="screenshots-scroll">
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="screenshot-item">
              <div className="screenshot-placeholder">
                <span>Screenshot {screenshot.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Screenshots
