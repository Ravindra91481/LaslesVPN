import React from 'react'
import './Aboutpage.css'
import locationicon from './images/location-icon.png'
import usericon from './images/user-icon.png'
import servericon from './images/server-icon.png'

function AboutPage() {
  return (
    <section id="about" className="quick-stats">
  <div className="container">
    <div>
      <img src={locationicon} alt="location icon" />
      <div>
        <p>
          <b>30+</b>
        </p>
        <p>Locations</p>
      </div>
    </div>
    <div>
      <img src={servericon} alt="server icon" />
      <div>
        <p>
          <b>50+</b>
        </p>
        <p>Servers</p>
      </div>
    </div>
    <div>
      <img src={usericon} alt="user icon" />
      <div>
        <p>
          <b>90+</b>
        </p>
        <p>Users</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default AboutPage