import React from "react"
import Layout from '../components/layout'
import ContentfulPosts from '../components/contentful-posts'
import MarkdownPosts from '../components/markdown-posts'

export default _ => {
  return (
    <Layout>
      <h1>Blog Posts</h1>
      <ContentfulPosts />
      <MarkdownPosts />
    </Layout>
  )
}