import React from 'react';
import './CoursesSection.css';
const courses = [
  {
    title: 'Low Level Design and Concurrency',
    description:
      'Crack Design and Machine Coding Rounds for Senior Software Engineer Roles and crack your dream job.',
    badge: 'Working Professionals',
    backgroundColor: '#2b1d52',
    badgeColor: '#3b2a70',
    image: 'src/assets/low-level-design.png',
  },
  {
    title: 'Crash Course in Data Structures & Algorithms',
    description:
      'A very concise program handpicked for you to master DSA quickly and crack your dream job.',
    badge: 'Working Professionals',
    backgroundColor: '#7f1d1d',
    badgeColor: '#991b1b',
    image: 'src/assets/electron 1.png',
  },
  {
    title: 'Renaissance for Top Tech Companies',
    description:
      'Master Data Structures & Algorithms and system design. Crack Top-notch Tech roles.',
    badge: 'Best Seller',
    backgroundColor: '#1e3a8a',
    badgeColor: '#3730a3',
    image: 'src/assets/worker 2.png',
  },
];

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <h2 className="courses-section-h2">Explore Other Courses</h2>
      <div className="courses-container">
        <div className="courses-container-card">
            {courses.map((course, index) => (
            <div
                className="course-card"
                key={index}
                style={{ backgroundColor: course.backgroundColor }}
            >
                <span
                className="badge"
                style={{ backgroundColor: course.badgeColor }}
                >
                {course.badge}
                </span>
                <img src={course.image} alt={course.title} className="course-image" />
                <h3>{course.title}</h3>
                <div className="section-below">
                <p>{course.description}</p>
                <a href="#">Know More</a>
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;