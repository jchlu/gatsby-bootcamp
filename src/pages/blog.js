import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import ContentfulPosts from '../components/contentful-posts'
import MarkdownPosts from '../components/markdown-posts'

export default _ => {
  return (
    <Layout>
      <Head title='blog' />
      <h1>Blog Posts</h1>
      <ContentfulPosts />
      <MarkdownPosts />
    </Layout>
  )
}