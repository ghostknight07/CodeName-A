import Navbar from "../../components/Navbar/Navbar.jsx";
import Blog from "../../components/Blog/Blog.jsx";
import PopularBlog from "../../components/PopularBlog/PopularBlog.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

// Importing blog data JSON file
import blogData from "../BlogData/BlogData.json";

import "./BlogPage.css";

function BlogPage() {
  const itemsPerPage = 5; // Number of blogs per page
  const totalPages = Math.ceil(blogData.length / itemsPerPage); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1);

  // Get blogs for the current page
  const blog = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="blogPage-Main">
      <div className="blogFullPage">
        <Navbar />
        
      <div className="blogResorcesContainer">
        
        <div className="blogSection-container">
          {/* Normal Blogs Section */}
          <div className="NormalblogSection-container">
            {blog.map((blog, index) => (
              <Link to={`/blog/${blog.id}`} key={blog.id}>
                <Blog
                  key={index}
                  authorName={blog.authorName}
                  blogTitle={blog.blogTitle}
                  blogDescription={blog.blogDescription}
                  pubDate={blog.pubDate}
                  blogImage={blog.blogImage}
                />
              </Link>
            ))}
          </div>
      


          {/* Popular Blogs Section */}
          <div className="populerSection-container">
            {blog.map(
              (blog, index) =>
                blog.isPopular && (
                  <Link to={`/blog/${blog.id}`} key={blog.id}>
                    <PopularBlog
                      key={index}
                      blogTitle={blog.blogTitle}
                      blogImage={blog.blogImage}
                      authorName={blog.authorName}
                    />
                  </Link>
                )
            )}
          </div>
          </div>

          {/* Pagination */}
          <div className="paginationContainer">
            {[...Array(totalPages)].map((_, pageIndex) => (
              <button
                key={pageIndex}
                className={`paginationButton ${
                  currentPage === pageIndex + 1 ? "activePage" : ""
                }`}
                onClick={() => handlePageChange(pageIndex + 1)}
              >
                {pageIndex + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;