import React from 'react';
import Card from '../Card/Card';
import Items from '../Items/Items';
import './CourseType.css';

const CourseType = ({ courseType }) => {
  const allHeadings = [
    'Data Structure & Algorithms',
    'Interview Preparation',
    'Competitive Programming',
    'Student Experiences',
    'About Us',
    'Time and Space Complexity',
  ];

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
          {allHeadings.map((heading, index) => (
            <Items key={index} heading={heading} courseType="all" />
          ))}
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
