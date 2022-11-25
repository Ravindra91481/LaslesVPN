import React from 'react'
import './Headerpage.css'
import Smallnavbar from './Smallnavbar'
import img1 from './images/logo.png'
import bars from './images/bars-solid.png'

function Header() {
  return (
    <div>
        <header className="header">
  <div className="container">
    <div className="logo-wrapper">
      <a href="#">
        <img src={img1} alt="LaslesVPN logo" />
        <img src="" alt="" />
      </a>
    </div>
    <nav className="nav">
      <ul>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#features">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pricing">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#testimonials">
            Testimonials
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#help">
            Help
          </a>
        </li>
      </ul>
    </nav>
    <div className="header-right">
      <a className="sign-in-btn" href="#signin">
        Sign In
      </a>
      <a
        className="btn btn--outlined btn--small btn--rounded-full font-500"
        href="#signup"
      >
        Sign Up
      </a>
    </div>
    <div className="hamburger-menu">
      <img src={bars} alt="" />
    </div>
  </div>
</header>
<Smallnavbar/>
    </div>
  )
}

export default Header