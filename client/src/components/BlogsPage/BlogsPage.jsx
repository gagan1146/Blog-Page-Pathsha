import React, { useState } from 'react';
import search_icon from '../../assets/search-icon.png';
import './BlogsPage.css';
import Card from '../Card/Card';
import Items from '../Items/Items';
import CourseType from '../CourseType/CourseType';

const BlogsPage = () => {
  const [Heading,setHeading] = useState("Blogs by Programming Pathshala");
  const [SubHeading,setSubHeading] = useState("SubHeading");
  const [courseType,setCourseType]= useState("all");
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
          <p onClick={() => setCourseType("all")}>All</p>
          <p onClick={() => setCourseType("data-structures")}>Data Structures and Algorithms</p>
          <p onClick={() => setCourseType("interview-preparation")}>Interview Preparation</p>
          <p onClick={() => setCourseType("competitive-programming")}>Competitive Programming</p>
        </div>
        <div className="skills1">
          <p onClick={() => setCourseType("student-experiences")}>Student Experiences</p>
          <p onClick={() => setCourseType("about-us")}>About Us</p>
          <p onClick={() => setCourseType("time-space-complexity")}>Time and Space Complexity</p>
        </div>
      </div>
      <CourseType courseType={courseType} />
    </div>
  );
};

export default BlogsPage;
