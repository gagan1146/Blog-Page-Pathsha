import React from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
        <div className="newsletter-section-inside">
            <h2>Join our Newsletter</h2>
            <p>Get exclusive content and become a part of the Code Everyday community</p>
            <form className="newsletter-form">
            <input type="email" placeholder="Your Email Address" />
            <button type="submit">Subscribe Now</button>
            </form>
            <p className="note">Spam free and unsubscribe anytime.</p>
        </div>
        </section>

  );
};

export default NewsletterSection;