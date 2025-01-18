import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from "../BlogData/BlogData.json";
import Navbar from '../../components/Navbar/Navbar';
import style from './BlogDetails.module.css';

function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id.toString() === id);

  return (
    <div className={style.BlogDetailsMainPage}>
      <div className={style.BlogDetailsFullPage}>
        <Navbar />
        <div className={style.BlogDetailsContainer}>
        <h1>{blog.blogName}</h1>
        <p>{blog.blogDescription}</p>
       <img src={blog.blogImage} alt={blog.blogName} />
     </div>
      </div>  
    </div>
  );
}

export default BlogDetails;