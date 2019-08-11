import React from "react"
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import BlogPost from '../components/blog-post'

export default _ => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
          html
          excerpt
        }
      }
    }
  }`)
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <h1>Blog Posts</h1>
      <ol>
        {posts.map(post => <BlogPost key={post.node.fields.slug} post={post} />)}
      </ol>
    </Layout>
  )
}