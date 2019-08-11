import React from 'react'

export default ({ post }) => {
  return (
    <li>
      <h2>{post.node.frontmatter.title}</h2>
      <p>{post.node.frontmatter.date}</p>
    </li>
  )
}