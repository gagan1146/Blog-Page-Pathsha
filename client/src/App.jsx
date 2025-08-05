import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import BlogsPage from './components/BlogsPage/BlogsPage'
import Footer from './components/CourseType/Footer/Footer'
import CoursesSection from './components/CoursesSection/CoursesSection'
import NewsletterSection from './components/NewsletterSection/NewsletterSection'
import OtherBlogs from './components/OtherBlogs/OtherBlogs'


const App = () => {
  const [currentPage,setCurrentPage] = useState("complete");
  const [exploreOtherCourses,setExploreOtherCourses] = useState("false");
  return (
    <div>
      <Navbar />
      { currentPage =="complete" ?  <BlogsPage />:<></>}
      <NewsletterSection />
      { exploreOtherCourses =="true" ?  <OtherBlogs />:<></>}
      <CoursesSection />
      <Footer />
    </div>
  )
}

export default App
