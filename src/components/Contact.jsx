import React from 'react'
import './Contact.css'

const Contact = () => {
  const contacts = [
    { icon: '💬', title: 'WhatsApp', link: '#' },
    { icon: '🐙', title: 'GitHub', link: '#' },
    { icon: '🐛', title: 'Bug Report', link: '#' },
    { icon: '💡', title: 'Feature Request', link: '#' }
  ]

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <div className="contact-grid">
          {contacts.map((contact, idx) => (
            <a key={idx} href={contact.link} className="contact-card">
              <span className="contact-icon">{contact.icon}</span>
              <span className="contact-title">{contact.title}</span>
            </a>
          ))}
        </div>
        
        <div className="collaboration">
          <p>In collaboration with <strong>Unmessify</strong> by Kanishka Chakraborty & Teesha Saxena</p>
        </div>

        <div className="developer-note">
          <p>Built by Divyanshu — still learning Flutter. Not fully optimized, might have bugs. Feel free to report or fix them!</p>
          <div className="developer-links">
            <a href="mailto:example@gmail.com" className="dev-link">Gmail</a>
            <a href="#" className="dev-link">WhatsApp</a>
            <a href="#" className="dev-link">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
