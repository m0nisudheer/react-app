import React from 'react'
import BlogObject from './BlogObject';
import BlogItem from './BlogItem';
import './Blog.css';

const Blog = () => {
  return (
    <div id='blog'>
      {
        BlogObject.map((blog,index)=>(
          <BlogItem key={index} blog={blog}/>
          // console.log(index)))
          //  console.log(blog)))
        ))
      }
      {/* <BlogItem blog={BlogObject[0]}/>
      <BlogItem blog={BlogObject[1]}/> */}
    </div>
  )
}

export default Blog
