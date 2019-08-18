const path = require('path')
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const contentfulBlogPostTemplate = path.resolve(`./src/templates/contentful-blog-post.js`)
  const markdownBlogPostTemplate = path.resolve(`./src/templates/markdown-blog-post.js`)
  const contentfulResponse = await graphql(`
  query GetAllContentfulBlogPost {
    allContentfulBlogPost(sort: {order: DESC, fields: publishedDate}) {
      edges {
        node {
          publishedDate(formatString: "MMMM Do, YYYY")
          slug
          title
        }
      }
    }
  }
  `)
  contentfulResponse.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: contentfulBlogPostTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })

  const markdownResponse = await graphql(`
  query GetAllMarkdown {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
  `)
  markdownResponse.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: markdownBlogPostTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}