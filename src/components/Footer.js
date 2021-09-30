import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="linkedin.com/in/mustafadar" className="icon fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
       
        <li>
          <a href="tel:07846561016" className="icon fa-phone">
            <span className="label">Phone</span>
          </a>
        </li>
        <li>
          <a href="maito:mustafa.dar@kwuk.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>Milton Keynes</li>
        <li>
        England, United Kingdom.
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
