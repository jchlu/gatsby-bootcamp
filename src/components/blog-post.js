import React from 'react'
import { Link } from 'gatsby'
import blogPostStyles from './blog-post.module.scss'

export default ({ post }) => {
  return (
    <li className={blogPostStyles.navItem}>
      <Link
        className={blogPostStyles.navItemLink}
        key={post.slug}
        to={`/blog/${post.slug}`}
      >
        <h2>
          {post.title}
        </h2>
        <p> {post.date} </p>
      </Link>
    </li >
  )
}