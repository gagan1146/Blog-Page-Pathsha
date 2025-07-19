import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <div className="image-wrapper">
        {blog.isLatest && <span className="latest-badge">Latest</span>}
        <img src={blog.image} alt={blog.title} className="blog-image" />
      </div>

      <div className="blog-content">
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-description">{blog.description}</p>
        <div className="blog-footer">
          <img
            src={blog.authorImage}
            alt={blog.author}
            className="author-avatar"
          />
          <div className="author-info">
            <span className="author-name">{blog.author}</span>
            <div className="date-time">
              <span>{blog.date}</span>
              <span> • </span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;