import React, { useState } from 'react'
import './Downloads.css'

const Downloads = () => {
  const [expandedVersion, setExpandedVersion] = useState(0)

  const versions = [
    {
      version: 'v1.2.0',
      date: 'Dec 2, 2024',
      isCurrent: true,
      notes: ['[CRITICAL]: Fixed timetable parsing issue', '[FEATURE]: Integrated EventHub VITC', 'General bug fixes and performance optimizations'],
      downloads: [
        { arch: 'ARM64-v8a', size: '31 MB', desc: 'For most modern Android devices (2019+)', link: '#' },
        { arch: 'ARMeabi-v7a', size: '28 MB', desc: 'For older Android devices (2015-2019)', link: '#' },
        { arch: 'Universal APK', size: '53 MB', desc: 'Works on all devices (larger file size)', link: '#' }
      ]
    },
    {
      version: 'v1.1.0',
      date: 'Nov 15, 2024',
      isCurrent: false,
      notes: ['[FIX]: Resolved authentication freeze', '[FIX]: Improved memory usage', '[FIX]: Theme persistence issue', '[FIX]: Accurate CGPA/GPA calculator'],
      downloads: [
        { arch: 'ARM64-v8a', size: '31 MB', desc: 'For most modern Android devices (2019+)', link: '#' },
        { arch: 'ARMeabi-v7a', size: '28 MB', desc: 'For older Android devices (2015-2019)', link: '#' },
        { arch: 'Universal APK', size: '53 MB', desc: 'Works on all devices', link: '#' }
      ]
    },
    {
      version: 'v1.0.0',
      date: 'Oct 1, 2024',
      isCurrent: false,
      notes: ['[INIT]: First official release of VITVerse'],
      downloads: [
        { arch: 'ARM64-v8a', size: '43 MB', desc: 'For most modern Android devices (2019+)', link: '#' },
        { arch: 'ARMeabi-v7a', size: '35 MB', desc: 'For older Android devices (2015-2019)', link: '#' },
        { arch: 'Universal APK', size: '128 MB', desc: 'Works on all devices', link: '#' }
      ]
    }
  ]

  const toggleVersion = (idx) => {
    setExpandedVersion(expandedVersion === idx ? -1 : idx)
  }

  return (
    <section className="downloads" id="download">
      <div className="downloads-container">
        <h2>Download VITVerse for Android</h2>
        
        <div className="versions-list">
          <div className="version-group">
            <h3 className="version-group-title">Current Version</h3>
            {versions.filter(v => v.isCurrent).map((version, idx) => (
              <div key={idx} className={`version-item ${expandedVersion === idx ? 'expanded' : ''}`}>
                <div className="version-header" onClick={() => toggleVersion(idx)}>
                  <div className="version-info">
                    <span className="version-number">{version.version}</span>
                    <span className="version-date">{version.date}</span>
                  </div>
                  <button className="expand-icon" aria-label="Expand">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d={expandedVersion === idx ? "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" : "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"} />
                    </svg>
                  </button>
                </div>
                
                {expandedVersion === idx && (
                  <div className="version-content">
                    <div className="release-notes">
                      <h4>Release Notes</h4>
                      <ul>
                        {version.notes.map((note, i) => (
                          <li key={i}>{note}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="download-options">
                      {version.downloads.map((dl, i) => (
                        <div key={i} className="download-card">
                          <div className="download-info">
                            <h5>{dl.arch}</h5>
                            <p className="download-size">{dl.size}</p>
                            <p className="download-desc">{dl.desc}</p>
                          </div>
                          <a href={dl.link} className="btn-download">Download</a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="version-group">
            <h3 className="version-group-title">Previous Versions</h3>
            {versions.filter(v => !v.isCurrent).map((version, idx) => {
              const actualIdx = idx + 1
              return (
                <div key={actualIdx} className={`version-item ${expandedVersion === actualIdx ? 'expanded' : ''}`}>
                  <div className="version-header" onClick={() => toggleVersion(actualIdx)}>
                    <div className="version-info">
                      <span className="version-number">{version.version}</span>
                      <span className="version-date">{version.date}</span>
                    </div>
                    <button className="expand-icon" aria-label="Expand">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d={expandedVersion === actualIdx ? "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" : "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"} />
                      </svg>
                    </button>
                  </div>
                  
                  {expandedVersion === actualIdx && (
                    <div className="version-content">
                      <div className="release-notes">
                        <h4>Release Notes</h4>
                        <ul>
                          {version.notes.map((note, i) => (
                            <li key={i}>{note}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="download-options">
                        {version.downloads.map((dl, i) => (
                          <div key={i} className="download-card">
                            <div className="download-info">
                              <h5>{dl.arch}</h5>
                              <p className="download-size">{dl.size}</p>
                              <p className="download-desc">{dl.desc}</p>
                            </div>
                            <a href={dl.link} className="btn-download">Download</a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="download-note">
          <p>Try ARM64-v8a first (works on 95% of modern phones). If it doesn't install, use Universal APK.</p>
        </div>
      </div>
    </section>
  )
}

export default Downloads
