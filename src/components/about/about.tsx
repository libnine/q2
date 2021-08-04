import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import { useStaticQuery, graphql } from 'gatsby'

interface QueryProps {
  aboutImg: {
    childImageSharp: {
      fixed: string;
    }
  }
}

function About() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const setFunc = (desktop: boolean, mobile: boolean): void => { 
    setIsDesktop(desktop); setIsMobile(mobile) 
  }

  useEffect(() => {
    window.innerWidth > 769 ? setFunc(true, false) : setFunc(true, false)
  }, [])

  const query = useStaticQuery<QueryProps>(graphql`
  {
    aboutImg: file(relativePath: { eq: "IMG_1457.png"}) {
      childImageSharp {
        fixed(height: 700, width: 500, grayscale: false) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }`)

  return (
    <section id="about">
      <Container>
        <Fade bottom duration={1000} delay={300} distance="0px">
          <h2 className="section-title">About Me</h2>
        </Fade>
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <Img className="rounded shadow-lg" alt="About" fixed={query.aboutImg.childImageSharp.fixed} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  Hi! I'm Matt - a software developer currently residing in sunny Los Angeles, CA. Let me tell you a little bit about myself.<br /><br />
                  Like many finance graduates, I began my career in New York City. I worked for two big banks before moving on to equities trading on Park Avenue. After realizing I was spending more time developing algorithms and automated trading strategies than actual trading, I decided to pursue my passion. I joined the consultancy Keyrus at the beginning of 2018 that specializes in data analytics. Keyrus gave me great exposure not just to the technical side, but working with different teams, understanding businesses, and the importance of communication.<br /><br />
                  As of today, I have done work in software development, data warehousing, ETL development, front & backend web development, database & server management, and algorithmic trading.<br /><br />
                  When I have some downtime, you can find me either making music or at In-N-Out Burger.<br /><br />
                </p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href="https://drive.google.com/file/d/1AjK9GlK-VR8wYHrYzSLYkbJlItJ2JmC-/view?usp=sharing"
                  >
                    Resume
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About