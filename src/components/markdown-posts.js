import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import BlogPost from './blog-post'
import blogStyles from './blog-post.module.scss'

export default _ => {
  const markdownData = useStaticQuery(graphql`
  query markDown {
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
  const markdownPosts = markdownData.allMarkdownRemark.edges
  return (
    <ol className={blogStyles.ol}>
      {markdownPosts.map(post => <BlogPost key={post.node.fields.slug} post={{
          title: post.node.frontmatter.title,
          date: post.node.frontmatter.date,
          slug: post.node.fields.slug
        }} />)}
    </ol>
  )
}