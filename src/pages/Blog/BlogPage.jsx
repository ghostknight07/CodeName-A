import Navbar from "../../components/Navbar/Navbar.jsx";
import Blog from "../../components/Blog/Blog.jsx";
import PopularBlog from "../../components/PopularBlog/PopularBlog.jsx";
import { useState } from "react";

// Importing blog data JSON file
import blogData from "../BlogData/BlogData.json";

import "./BlogPage.css";

function BlogPage() {
  const itemsPerPage = 5; // Number of blogs per page
  const totalPages = Math.ceil(blogData.length / itemsPerPage); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1);

  // Get blogs for the current page
  const currentBlogs = blogData.slice(
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
            {currentBlogs.map((blog, index) => (
              <Blog
                key={index}
                authorName={blog.authorName}
                blogTitle={blog.blogTitle}
                blogDescription={blog.blogDescription}
                pubDate={blog.pubDate}
                blogImage={blog.blogImage}
              />
            ))}
          </div>
      

          {/* Popular Blogs Section */}
          <div className="populerSection-container">
            {currentBlogs.map(
              (blog, index) =>
                blog.isPopular && (
                  <PopularBlog
                    key={index}
                    blogTitle={blog.blogTitle}
                    blogImage={blog.blogImage}
                    authorName={blog.authorName}
                  />
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
