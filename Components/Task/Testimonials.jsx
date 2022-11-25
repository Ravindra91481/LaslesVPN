import React from 'react'
import './Testmonials.css'

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
  <div className="container">
    <div className="section-header">
      <h1 className="section-title">Trusted by Thousands of Happy Customer</h1>
      <p className="section-subtitle">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>
    </div>
    <div className="testimonials-wrapper owl-carousel owl-loaded owl-drag">
      <div className="owl-stage-outer">
        <div
          className="owl-stage"
          style={{
            transform: "translate3d(-987px, 0px, 0px)",
            transition: "all 0s ease 0s",
            width: 3457
          }}
        >
          <div
            className="owl-item cloned"
            style={{ width: "443.8px", marginRight: 50 }}
          >
            <div className="testimonial item">
              <div className="testimonial-top">
                <div className="customer-photo">
                  <img src="images/customer-2.png" alt="Customer photo" />
                </div>
                <div>
                  <h4 className="customer-name font-500">Yessica Christy</h4>
                  <p className="customer-location">Shanxi, China</p>
                </div>
                <div className="customer-rating">4.5</div>
              </div>
              <div className="testimonial-body">
                “I like it because I like to travel far and still can connect
                with high speed.”.
              </div>
            </div>
          </div>
          <div
            className="owl-item cloned"
            style={{ width: "443.8px", marginRight: 50 }}
          >
            <div className="testimonial item">
              <div className="testimonial-top">
                <div className="customer-photo">
                  <img src="images/customer-3.png" alt="Customer photo" />
                </div>
                <div>
                  <h4 className="customer-name font-500">Kim Young Jou</h4>
                  <p className="customer-location">Seoul, South Korea</p>
                </div>
                <div className="customer-rating">4.5</div>
              </div>
              <div className="testimonial-body">
                “This is very unusual for my business that currently requires a
                virtual private network that has high security.”.
              </div>
            </div>
          </div>
          <div
            className="owl-item active"
            style={{ width: "443.8px", marginRight: 50 }}
          >
            <div className="testimonial testimonial--active item">
              <div className="testimonial-top">
                <div className="customer-photo">
                  <img src="images/customer-1.png" alt="Customer photo" />
                </div>
                <div>
                  <h4 className="customer-name font-500">Viezh Robert</h4>
                  <p className="customer-location">Warsaw, Poland</p>
                </div>
                <div className="customer-rating">4.5</div>
              </div>
              <div className="testimonial-body">
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN always the best”.
              </div>
            </div>
          </div>
          <div
            className="owl-item active"
            style={{ width: "443.8px", marginRight: 50 }}
          >
            <div className="testimonial item">
              <div className="testimonial-top">
                <div className="customer-photo">
                  <img src="images/customer-2.png" alt="Customer photo" />
                </div>
                <div>
                  <h4 className="customer-name font-500">Yessica Christy</h4>
                  <p className="customer-location">Shanxi, China</p>
                </div>
                <div className="customer-rating">4.5</div>
              </div>
              <div className="testimonial-body">
                “I like it because I like to travel far and still can connect
                with high speed.”.
              </div>
            </div>
          </div>
          <div
            className="owl-item"
            style={{ width: "443.8px", marginRight: 50 }}
          >
            <div className="testimonial item">
              <div className="testimonial-top">
                <div className="customer-photo">
                  <img src="images/customer-3.png" alt="Customer photo" />
                </div>
                <div>
                  <h4 className="customer-name font-500">Kim Young Jou</h4>
                  <p className="customer-location">Seoul, South Korea</p>
                </div>
                <div className="customer-rating">4.5</div>
              </div>
              <div className="testimonial-body">
                “This is very unusual for my business that currently requires a
                virtual private network that has high security.”.
              </div>
            </div>
          </div>
          <div
            className="owl-item cloned"
            style={{ width: "443.8px", marginRight: 50 }}
          >
            <div className="testimonial testimonial--active item">
              <div className="testimonial-top">
                <div className="customer-photo">
                  <img src="images/customer-1.png" alt="Customer photo" />
                </div>
                <div>
                  <h4 className="customer-name font-500">Viezh Robert</h4>
                  <p className="customer-location">Warsaw, Poland</p>
                </div>
                <div className="customer-rating">4.5</div>
              </div>
              <div className="testimonial-body">
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN always the best”.
              </div>
            </div>
          </div>
          <div
            className="owl-item cloned"
            style={{ width: "443.8px", marginRight: 50 }}
          >
            <div className="testimonial item">
              <div className="testimonial-top">
                <div className="customer-photo">
                  <img src="images/customer-2.png" alt="Customer photo" />
                </div>
                <div>
                  <h4 className="customer-name font-500">Yessica Christy</h4>
                  <p className="customer-location">Shanxi, China</p>
                </div>
                <div className="customer-rating">4.5</div>
              </div>
              <div className="testimonial-body">
                “I like it because I like to travel far and still can connect
                with high speed.”.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="owl-nav disabled">
        <button type="button" role="presentation" className="owl-prev">
          <span aria-label="Previous">‹</span>
        </button>
        <button type="button" role="presentation" className="owl-next">
          <span aria-label="Next">›</span>
        </button>
      </div>
    </div>
    <div className="controls">
      <div className="container">
        <div className="dots">
          <div className="dot active" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="arrows">
          <div className="arrow-left">
            <img src="images/arrow-left.svg" alt="" />
          </div>
          <div className="arrow-right">
            <img src="images/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Testimonials