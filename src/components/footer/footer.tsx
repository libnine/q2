import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { networks } from "./_networks"

interface Network {
  id: string;
  name: string;
  url: string;
}

function Footer() {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks.map((network: Network) => {
              return (
                <a
                  key={network.id}
                  href={network.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={network.name}
                >
                  <i className={`fa fa-${network.name || 'refresh'} fa-inverse`} />
                </a>
              )
            }
          )}
        </div>
      </Container>
    </footer>
  )
}

export default Footer