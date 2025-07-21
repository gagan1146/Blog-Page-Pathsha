import React from 'react';
import './CoursesSection.css';

const courses = [
  {
    title: 'Low Level Design and Concurrency',
    description:
      'Crack Design and Machine Coding Rounds for Senior Software Engineer Roles and crack your dream job.',
    badge: 'Working Professionals',
    className: 'card-purple',
    image: 'src/assets/low-level-design.png',
  },
  {
    title: 'Crash Course in Data Structures & Algorithms',
    description:
      'A very concise program handpicked for you to master DSA quickly and crack your dream job.',
    badge: 'Working Professionals',
    className: 'card-red',
    image: 'src/assets/electron 1.png',
  },
  {
    title: 'Renaissance for Top Tech Companies',
    description:
      'Master Data Structures & Algorithms and system design. Crack Top-notch Tech roles.',
    badge: 'Best Seller',
    className: 'card-blue',
    image: 'src/assets/worker 2.png',
  },
];

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <h2>Explore Other Courses</h2>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div className={`course-card ${course.className}`} key={index}>
            <span className="badge">{course.badge}</span>
            <img src={course.image} alt={course.title} className="course-image" />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <a href="#">Know More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;