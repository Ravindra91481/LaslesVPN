import React from 'react'
import './Footer.css'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'
import Logo from './images/logo.png'

function FooterPage() {
  return (
    <footer className="footer">
  <div className="container">
    <div>
      <div className="footer-logo">
        <a href="#">
          <img src={Logo}alt="logo" />
        </a>
      </div>
      <p>
        LaslesVPN is a private virtual network that has unique features and has
        high security.
      </p>
      <div className="social-icons">
        <a
          className="social-icon"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <img src={facebook} alt="" />
        </a>
        <a className="social-icon" href="https://twitter.com/" target="_blank">
          <img src={twitter} alt="" />
        </a>
        <a
          className="social-icon"
          href="https://www.instagram.com/"
          target="_blank"
        >
        <img src={instagram} alt="" />
        </a>
      </div>
      <p>© 2020 LaslesVPN</p>
    </div>
    <div>
      <h4 className="font-500">Product</h4>
      <ul>
        <li>
          <a href="#">Download</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Locations</a>
        </li>
        <li>
          <a href="#">Server</a>
        </li>
        <li>
          <a href="#">Countries</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="font-500">Engage</h4>
      <ul>
        <li>
          <a href="#">LaslesVPN ?</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Tutorials</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of Service</a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="font-500">Earn Money</h4>
      <ul>
        <li>
          <a href="#">Affiliate</a>
        </li>
        <li>
          <a href="#">Become Partner</a>
        </li>
      </ul>
    </div>
  </div>
</footer>

  )
}

export default FooterPage