import React, { useState } from 'react';
import search_icon from '../../assets/search-icon.png';
import './BlogsPage.css';
import Card from '../Card/Card';
import Items from '../Items/Items';

const BlogsPage = () => {
  const [Heading,setHeading] = useState("Blogs by Programming Pathshala");
  const [SubHeading,setSubHeading] = useState("SubHeading");
  return (
    <div className="blogs-page" id="blogs-page">
      <div className="heading">
        <h1 id="heading-h1">{Heading}</h1>
        <div className="items">
          {Heading =="Heading" ?<><h2>{SubHeading}</h2><button className='startPost'>Write a Post</button></>:<></>}
        </div>
        <div className="input-wrapper">
          <img src={search_icon} alt="Search Icon" className="search_icon" />
          <input
            type="text"
            placeholder="What are you looking for?"
            id="heading-input"
          />
        </div>
      </div>

      <div className="skills">
        <div className="skills1">
          <p>All</p>
          <p>Data Structures and Algorithms</p>
          <p>Interview Preparation</p>
          <p>Competitive Programming</p>
        </div>
        <div className="skills1">
          <p>Student Experiences</p>
          <p>About Us</p>
          <p>Time and Space Complexity</p>
        </div>
      </div>
      <div className="cards-section">
        <div id="latests">
          <Card isLatest={true} />
          <Card isLatest={true} />
        </div>
      </div>
      <Items/>
      
    </div>
  );
};

export default BlogsPage;
