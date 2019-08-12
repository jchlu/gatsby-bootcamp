import React from 'react'
import { Link } from 'gatsby'
import blogPostStyles from './blog-post.module.scss'

export default ({ post }) => {
  return (
    <li className={blogPostStyles.navItem}>
      <Link
      className={blogPostStyles.navItemLink}
      key={post.node.fields.slug}
      to={`/blog/${post.node.fields.slug}`}
      >
      <h2>
        {post.node.frontmatter.title}
        </h2>
        <p> {post.node.frontmatter.date} </p>
      </Link>
    </li >
  )
}