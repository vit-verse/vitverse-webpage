import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="app-icon">
            <img src="/logo.png" alt="VITVerse" className="hero-logo-img" />
          </div>
          <div className="app-info">
            <h1 className="app-title lora">VIT Verse</h1>
            <p className="app-developer"><a href="https://divyanshupatel.com" target="_blank" rel="noopener noreferrer">@divyanshupatel</a></p>
            <div className="app-meta">
              <div className="meta-item">
                <span className="meta-value">4.8★</span>
                <span className="meta-label">Ratings</span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <span className="meta-value">3K+</span>
                <span className="meta-label">Downloads</span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <span className="meta-badge">v1.2.0</span>
                <span className="meta-label">Current Version</span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <a href="https://github.com/vit-verse" target="_blank" rel="noopener noreferrer" className="github-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="github-text">Open Source</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-actions">
          <a href="#download" className="btn-install">Install</a>
          <button
            className="btn-share"
            aria-label="Share"
            onClick={async () => {
              const data = {
                url: window.location.href
              };
              if (navigator.share) {
                try {
                  await navigator.share(data);
                  console.log("Shared successfully");
                } catch (err) {
                  console.error("Share failed:", err);
                }
              } else {
                // Fallback: copy URL
                await navigator.clipboard.writeText(data.url);
                alert("Link copied! Sharing not supported on this browser.");
              }
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
            </svg>
            <span>Share</span>
          </button>

        </div>
      </div>
      <p className="hero-description outfit">
        Your Complete VTOP Companion & Campus Utility Hub. Seamlessly access VTOP services, track attendance, manage timetables, and explore campus features. The ultimate all-in-one app for VIT Chennai students.
      </p>
    </section>
  )
}

export default Hero