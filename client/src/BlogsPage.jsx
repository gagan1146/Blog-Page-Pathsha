import React from 'react'
import search_icon from './assets/search-icon.png'
import './BlogsPage.css'

const BlogsPage = () => {
  return (
    <div className="blogs-page" id="blogs-page">
        <div className="heading">
            <h1 id="heading-h1">Blogs by Programming Pathshala</h1>
            <img src={search_icon} alt="Search Icon" className='search_icon' /><input type="text" placeholder='What are you looking for?' id='heading-input' />
        </div>
        <div className="skills">
          <div className="skills1">
            <p style={{ width: '18px', height: '16px' }}>All</p>
            <p style={{ width: '213px', height: '16px' }}>Data Structures and Algorithms</p>
            <p style={{ width: '157px', height: '16px' }}>Interview Preparation</p>
            <p style={{ width: '196px', height: '16px' }}>Competitive Programming</p>
          </div>
          <div className="skills1">
            <p style={{ width: '148px', height: '16px' }}>Student Experiences</p>
            <p style={{ width: '66px', height: '16px' }}>About Us</p>
            <p style={{ width: '206px', height: '16px' }}>Time and Space Complexity</p>
          </div>
          <div className="skills1"></div>

        </div>
    </div>
  )
}

export default BlogsPage
