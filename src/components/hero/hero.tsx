import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade'

function Hero() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  
  const setFunc = (desktop: boolean, mobile: boolean): void => { 
    setIsDesktop(desktop); setIsMobile(mobile) 
  }

  useEffect(() => {
    window.innerWidth > 769 ? setFunc(true, false) : setFunc(true, false)
  }, [])

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            Hello friends. I'm <span className="text-color-main">Matt Gorzka</span>.
            <br />
            I'm a software engineer.
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                Learn more
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  )
}

export default Hero