import React from 'react'
import './SectionPage.css'
import illustration from './images/illustration.png'
function SectionPage() {
  return (
    <section className="hero">
    <div className="container">
      <div className="hero-left">
        <h1 className="section-title">
          Want anything to be <br />
          easy with <span>LaslesVPN.</span>
        </h1>
        <p className="section-subtitle">
          Provide a network for all your needs with ease and fun using
          <span>LaslesVPN</span> discover interesting features from us.
        </p>
        <a className="btn btn-cta btn--large btn--rounded font-700" href="#">
          Get Started
        </a>
      </div>
      <div className="hero-right">
        <img src={illustration}alt="illustration" />
      </div>
    </div>
  </section>
  )
}

export default SectionPage