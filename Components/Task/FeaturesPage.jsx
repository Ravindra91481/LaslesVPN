import React from 'react'
import './FeaturesPage.css'
import illustration from './images/illustration-2.png'

function FeaturesPage() {
  return (
    <section id="features" className="features">
  <div className="container">
    <div className="features-left">
      <img src={illustration} alt="illustration" />
    </div>
    <div className="features-right">
      <h2 className="section-title">
        We Provide Many <br />
        Features You Can Use
      </h2>
      <p className="section-subtitle">
        You can explore the features that we provide with fun and have their own
        functions each feature.
      </p>
      <ul className="features-list">
        <li>Powerfull online protection.</li>
        <li>Internet without borders.</li>
        <li>Supercharged VPN</li>
        <li>No specific time limits.</li>
      </ul>
    </div>
  </div>
</section>
  )
}

export default FeaturesPage