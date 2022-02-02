import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={people[currentReview].image} alt='' className='person-img' />
        <div className='quote-icon'>
          <FaQuoteRight />
        </div>
      </div>
      <h4 className='author'>{people[currentReview].name}</h4>
      <h4 className='job'>{people[currentReview].job}</h4>
      <p className='info'>{people[currentReview].text}</p>
      <div>
        <FaChevronLeft
          className='prev-btn'
          onClick={() =>
            setCurrentReview(
              currentReview === 0 ? people.length - 1 : currentReview - 1
            )
          }
        />
        <FaChevronRight
          className='next-btn'
          onClick={() => setCurrentReview((currentReview + 1) % people.length)}
        />
      </div>

      <button
        className='random-btn'
        onClick={() => {
          let randomNumber = parseInt(Math.random() * people.length);
          if (randomNumber === currentReview) {
            randomNumber += 1;
            randomNumber %= people.length;
          }
          setCurrentReview(randomNumber);
        }}>
        surprise me!
      </button>
    </article>
  );
};

export default Review;
