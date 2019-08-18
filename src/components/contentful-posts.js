import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import BlogPost from './blog-post'
import blogStyles from './blog-post.module.scss'

export default _ => {
  const contentfulData = useStaticQuery(graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          publishedDate
          body {
            content {
              content {
                value
              }
            }
          }
          slug
        }
      }
    }
  }`)
  const contentfulPosts = contentfulData.allContentfulBlogPost.edges
  return (
    <ol className={blogStyles.ol}>
      {contentfulPosts.map(post => <BlogPost key={post.node.slug} post={{
        title: post.node.title,
        date: post.node.publishedDate,
        slug: post.node.slug
      }} />)}
    </ol>
  )
}