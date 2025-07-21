import React from 'react';
import Card from '../Card/Card';
import '../Card/Card.css';
import './Items.css';
import '../BlogCards/BlogCard.css';

const Items = ({ heading, courseType }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <div className="cards-wrapper">
        <Card isLatest={false} />
        <Card isLatest={false} />
        <Card isLatest={false} />
      </div>
    </div>
  );
};

export default Items;
