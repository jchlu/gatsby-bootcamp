import React from 'react'
import { Link } from 'gatsby'
import blogPostStyles from './blog-post.module.scss'

export default ({ post }) => {
  return (
    <li>
      <h2>
        <Link
          className={blogPostStyles.navItem}
          key={post.node.fields.slug}
          to={`/blog/${post.node.fields.slug}`}
        >
          {post.node.frontmatter.title}
        </Link>
      </h2>
      <p>
        {post.node.frontmatter.date}
      </p>
    </li>
  )
}