import React from 'react'
import Helmet from 'react-helmet'

import Listing from '../components/Listing'
import Services from '../components/Services'
import Layout from '../components/layout'
import kwLOGO from '../assets/images/kw.jpg'
const HomeIndex = () => {
  const siteTitle = 'Mustafa Dar  - Keller Williams UK'
  const siteDescription = 'Real Estate Professional with Keller Williams UK'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
        <img className="kwLogo" src={kwLOGO} alt="KELLERWILIAMS" />
          <header className="major">
            <h2>
            Trusted Property Consultant.
            </h2>
          </header>
          <p>Traditionally, most agencies tend to cast a wide net on any possible suitors, while at Keller William, we tend to focus purely on our clients precise needs and formulate a bespoke marketing strategy specific to every client and their home or need.</p>
          <p>In an ever changing economy, local knowledge and expertise goes a long way to negotiating the best deals, therefore who better than your local property agent, me!
          My task is to reduce the distance between paradise and the place you call home.</p>
          <ul className="actions">
            <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
            <div className="hidden">
          <p>As a professional real estate agent, my extensive knowledge in the market spans back to my childhood. Following in my father’s footsteps, I joined the family business straight after university and completed 6 years learning the ropes and managing the business before I then made the move to the UK.</p>
          <p>In the UK I joined a high street agency as a trainee and worked my way up to a sales negotiator. Having completed 3 years I decided I was ready for a bigger challenge.
          No challenge could possibly be bigger, than joining the world’s largest estate agency, Keller Williams. With over 190 000 independent agents across 53 countries, tailored marketing tools and strategies, I now have the ability to reach out to people across the globe.</p>
          </div>
          
         
        </section>
        <section id="two">
          <h2>Services</h2>

          <Services />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </section>
        <section id="two">
          <h2>Listings</h2>

          <Listing />

         
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
          Lets talk about the services that I can provide under the Keller Williams umbrella.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
               
                 
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  07846561016 
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">mustafa.dar@kwuk.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
