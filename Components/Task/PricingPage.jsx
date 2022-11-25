import React from 'react'
import './PricingPage.css'
import Pack from './images/planimg.png'

function PricingPage() {
  return (
    <section id="pricing" class="plans">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Choose Your Plan</h2>
          <p class="section-subtitle">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div class="plans-wrapper">
          <div class="plan">
            <div class="plan-image">
              <img src={Pack} alt="Free plan"/>
            </div>
            <h3>Free Plan</h3>
            <div class="plan-features">
              <ul>
                <li>Unlimited Bandwitch</li>
                <li>Encrypted Connection</li>
                <li>No Traffic Logs</li>
                <li>Works on All Devices</li>
              </ul>
            </div>
            <div class="plan-bottom">
              <h4 class="plan-price">Free</h4>
              <a class="btn btn--medium btn--outlined btn--rounded-full font-700" href="#">Select</a>
            </div>
          </div>
          <div class="plan">
            <div class="plan-image">
              <img src={Pack} alt="Standard plan"/>
            </div>
            <h3>Standard Plan</h3>
            <div class="plan-features">
              <ul>
                <li>Unlimited Bandwitch</li>
                <li>Encrypted Connection</li>
                <li>Yes Traffic Logs</li>
                <li>Works on All Devices</li>
                <li>Connect Anywhere</li>
              </ul>
            </div>
            <div class="plan-bottom">
              <h4 class="plan-price">$9 <span class="font-400">/ mo</span></h4>
              <a class="btn btn--medium btn--outlined btn--rounded-full font-700" href="#">Select</a>
            </div>
          </div>
          <div class="plan plan--recommended">
            <div class="plan-image">
              <img src={Pack} alt="Premium plan"/>
            </div>
            <h3>Premium Plan</h3>
            <div class="plan-features">
              <ul>
                <li>Unlimited Bandwitch</li>
                <li>Encrypted Connection</li>
                <li>Yes Traffic Logs</li>
                <li>Works on All Devices</li>
                <li>Connect Anywhere</li>
                <li>Get New Features</li>
              </ul>
            </div>
            <div class="plan-bottom">
              <h4 class="plan-price">$12 <span class="font-400">/ mo</span></h4>
              <a class="btn btn--medium btn--outlined btn--rounded-full font-700" href="#">Select</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPage