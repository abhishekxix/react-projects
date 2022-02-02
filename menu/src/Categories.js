import React from 'react';
import data from './data';

const Categories = ({ categories, setMenuItems }) => {
  return (
    <section className='btn-container'>
      {categories.length > 1 && (
        <button className='filter-btn' onClick={() => setMenuItems([...data])}>
          All
        </button>
      )}

      {categories.map((category) => (
        <button
          className='filter-btn'
          onClick={() => {
            setMenuItems(data.filter((item) => item.category === category));
          }}>
          {category}
        </button>
      ))}
    </section>
  );
};

export default Categories;
