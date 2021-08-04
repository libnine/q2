import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container } from 'react-bootstrap'

function Contact() {
  return (
    <section id="contact">
      <Container>
        <Fade bottom duration={1000} delay={300} distance="0px">
          <h2 className="section-title">Contact</h2>
        </Fade>
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              Looking to get in touch?
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href="mailto:mgorzk@gmail.com"
            >
              Reach out
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  )
}

export default Contact