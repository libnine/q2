import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import { useStaticQuery, graphql } from 'gatsby'
import { projects } from './_projects'

interface Project {
  id?: string;
  description?: string;
  image: string;
  link?: string;
  name: string;
  sourceCode?: string;
  summary?: string;
}

interface QueryProps {
  images: {
    edges: {
      node: {
        relativePath: string;
        name: string;
        childImageSharp: {
          fluid: string;
        }
      }
    }
  }
}

function Projects() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const setFunc = (desktop: boolean, mobile: boolean): void => { 
    setIsDesktop(desktop); setIsMobile(mobile) 
  }

  useEffect(() => {
    window.innerWidth > 769 ? setFunc(true, false) : setFunc(true, false)
  }, [])

  const Image = ({ image, name }: Project): JSX.Element => {
    let data = useStaticQuery<QueryProps>(graphql`
      {
        images: allFile(filter: {relativePath: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 625, height: 625) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `)
  
    let img: QueryProps = data.images.edges.find((n: any) => 
      n.node.relativePath.includes(image)
    )

    return <Img fixed={img.node.childImageSharp.fixed} alt={name} />
  }

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Fade bottom duration={1000} delay={300} distance="0px">
            <h2 className="section-title">Projects</h2>
          </Fade>
          {projects.map((project: Project): JSX.Element => {  
            return (
              <Row key={project.id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{project.name}</h3>
                      {project.summary &&
                        <div>
                          <p dangerouslySetInnerHTML ={ { __html: project.summary } } />
                        </div>
                      }
                      {project.sourceCode &&
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={project.link}
                        >
                          Source Code
                        </a> 
                      }
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={project.link}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <Image
                              image={project.image}
                              name={project.name}
                            />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            )})
          }
        </div>
      </Container>
    </section>
  )
}

export default Projects