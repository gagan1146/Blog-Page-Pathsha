import React from 'react'
import BlogCard from '../BlogCards/BlogCard';

const blog = {
  title: 'A Comprehensive Guide to build an Ultimate Tech Career!',
  description:
    'For beginning a career in Software Development, it becomes imperative for one to know about the basic nitty-gritty of the field...',
  image: 'src/assets/blogs-image.png.png',
  author: 'Vivekanand Vivek',
  authorImage: 'src/assets/blogs-image.png.png',
  date: 'November 21, 2023',
  readTime: '8 Minutes',
  isLatest: true,
};

const Card = () => {
  return (
    <div>
      <BlogCard blog={blog} />
    </div>
  )
}

export default Card
