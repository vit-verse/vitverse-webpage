import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-disclaimer">
          <p>Built with ❤️ just for entertainment purposes... no deep VIT missions here 😎</p>
          <p>Not affiliated with VIT Chennai. Developed independently by a VIT Chennai student.</p>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <span className="footer-divider">•</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
