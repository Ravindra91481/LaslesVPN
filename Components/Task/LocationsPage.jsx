import React from 'react'
import './LocationsPage.css'
import img1 from './images/locations.png'
import Amazon from './images/amazon-logo.png'
import netflix from './images/netflix-logo.png'
import reddit from './images/reddit-logo.png'
import spotify from './images/spotify-logo.png'
import discord from './images/discord-logo.png'


function Locationspage() {
  return (
    <section className="locations">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title">Huge Global Network of Fast VPN</h2>
      <p className="section-subtitle">
        See LaslesVPN everywhere to make it easier for you when you move
        locations.
      </p>
    </div>
    <div className="locations-map-wrapper">
      <img src={img1} alt="Locations Map" />
    </div>
    <div className="sponsored">
      <div className="sponsor">
        <img src={netflix} alt="Netflix logo" />
      </div>
      <div className="sponsor">
        <img src={reddit} alt="Reddit logo" />
      </div>
      <div className="sponsor">
        <img src={Amazon} alt="Amazon logo" />
      </div>
      <div className="sponsor">
        <img src={discord} alt="Discord logo" />
      </div>
      <div className="sponsor">
        <img src={spotify} alt="Spotify logo" />
      </div>
    </div>
  </div>
</section>
  )
}

export default Locationspage