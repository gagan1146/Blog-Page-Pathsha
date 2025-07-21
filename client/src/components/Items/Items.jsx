import React from 'react'
import Card from '../Card/Card';
import '../Card/Card.css';
import './Items.css';
import '../BlogCards/BlogCard.css';


const Items = () => {
  return (
    <div>
      <h1>Data Structure & Algorithms</h1>
      <div id="latests">
          <Card isLatest={false} />
          <Card isLatest={false} />
          <Card isLatest={false} />
      </div>
    </div>
  )
}

export default Items;
