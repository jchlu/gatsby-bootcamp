import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      date
    }
    html
  }
}`

export default ({ data }) => {
  return (
    <Layout>
      <Head title={data.markdownRemark.frontmatter.title} />
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>{data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
    </Layout>
  )
}