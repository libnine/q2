import React from 'react'
import { Helmet } from 'react-helmet'
import App from '../components/App'
import SEO from '../components/seo/seo'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/main.scss'

export default function() {
  return (
    <>
      <Helmet>
        <SEO title="Matt Gorzka" />
        <meta charSet="utf-8" />
        <title>Matt Gorzka</title>
        <html lang='en' />
        <meta name="description" content="Portfolio" />
      </Helmet>
      <App />
    </>
  )
}