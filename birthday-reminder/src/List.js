import React from 'react';

const Person = ({ name, age, image }) => {
  return (
    <div className='person'>
      <img src={image} alt='' />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

const List = ({ people }) => {
  return (
    <>
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => (
        <Person {...person} />
      ))}
    </>
  );
};

export default List;
