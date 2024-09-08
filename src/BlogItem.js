import React from 'react'

const BlogItem = ({blog}) => {
  return (
    <div id='blog-item'>
      <img src={blog.img} alt={blog.name} />
      <aside>{blog.name}</aside>
      <h2>{blog.sideHead}</h2>
      <p>{blog.paragraph}</p>
      <h4>{blog.more}</h4>
    </div>
  )
}

export default BlogItem