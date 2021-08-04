import React from 'react'

interface Html {
  htmlAttributes: Object;
  headComponents: Array<string>;
  bodyAttributes: Object;
  preBodyComponents: Array<string>;
  body: string;
  postBodyComponents: Array<string>;
}

function HTML
  ({
    htmlAttributes,
    headComponents,
    bodyAttributes,
    preBodyComponents,
    postBodyComponents,
    body
  }: Html) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  )
}

export default HTML