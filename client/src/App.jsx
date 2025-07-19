import React from 'react'
import Navbar from './components/Navbar/Navbar'
import BlogsPage from './components/BlogsPage/BlogsPage'
import Footer from './components/Footer/Footer'
import CoursesSection from './components/CoursesSection/CoursesSection'
import NewsletterSection from './components/NewsletterSection/NewsletterSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <BlogsPage />
      <NewsletterSection />
      <CoursesSection />
      <Footer />
    </div>
  )
}

export default App
