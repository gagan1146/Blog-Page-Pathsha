import React from 'react';
import Card from '../Card/Card';
import '../Card/Card.css';
import './Items.css';
import '../BlogCards/BlogCard.css';

const Items = ({ heading, courseType }) => {
  const cardCount = courseType === 'all' ? 3 : 6;

  const cards = Array.from({ length: cardCount }, (_, index) => (
    <Card key={index} isLatest={false} />
  ));

  const splitCards = (cards) => {
    const mid = Math.ceil(cards.length / 2);
    return [cards.slice(0, mid), cards.slice(mid)];
  };

  return (
    <div className="items-section">
      <h1>{heading}</h1>
      {cardCount === 3 ? (
        <div className="cards-wrapper">
          {cards}
        </div>
      ) : (
        splitCards(cards).map((row, index) => (
          <div className="cards-wrapper" key={index}>
            {row}
          </div>
        ))
      )}
    </div>
  );
};

export default Items;
