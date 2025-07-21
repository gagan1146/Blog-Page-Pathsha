import React from 'react';
import Card from '../Card/Card';
import Items from '../Items/Items';
import './CourseType.css';

const CourseType = ({ courseType }) => {
  switch (courseType) {
    case 'all':
      return (
        <>
          <div className="cards-section">
            <div className="latests">
              <Card isLatest={true} />
              <Card isLatest={true} />
            </div>
          </div>
          <Items heading="Data Structure & Algorithms" />
          <Items heading="Interview Preparation" />
          <Items heading="Competitive Programming" />
          <Items heading="Student Experiences" />
          <Items heading="About Us" />
          <Items heading="Time and Space Complexity" />
        </>
      );

    case 'data-structures':
      return <Items courseType={courseType} heading="Data Structure & Algorithms" />;

    case 'interview-preparation':
      return <Items courseType={courseType} heading="Interview Preparation" />;

    case 'competitive-programming':
      return <Items courseType={courseType} heading="Competitive Programming" />;

    case 'student-experiences':
      return <Items courseType={courseType} heading="Student Experiences" />;

    case 'about-us':
      return <Items courseType={courseType} heading="About Us" />;

    case 'time-space-complexity':
      return <Items courseType={courseType} heading="Time and Space Complexity" />;

    default:
      return <p>No course data available.</p>;
  }
};

export default CourseType;