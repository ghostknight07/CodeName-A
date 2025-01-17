import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from "../BlogData/BlogData.json";

function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id.toString() === id);

  return (
    <div>
      <h1>{blog.blogName}</h1>
      <p>{blog.blogDescription}</p>
      <img src={blog.blogImage} alt={blog.blogName} />
    </div>
  );
}

export default BlogDetails;