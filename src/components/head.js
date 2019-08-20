import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

export default ({ title }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)

  return (
    <Helmet title={` ${title} | ${data.site.siteMetadata.title}`} />
  )
}
