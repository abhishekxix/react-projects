import React from 'react';
import { useState } from 'react';
import Categories from './Categories';
import data from './data';

const Menu = () => {
  const [menuItems, setMenuItems] = useState(data);
  const categories = Array.from(new Set(data.map((item) => item.category)));

  return (
    <main>
      <div className='menu section'>
        <header className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </header>
        <Categories categories={categories} setMenuItems={setMenuItems} />
        <section className='section-center'>
          {menuItems.map((item) => (
            <article className='menu-item' key={item.id}>
              <img src={item.img} alt='' className='photo' />
              <div className='item-info'>
                <header>
                  <h4>{item.title}</h4>
                  <h4 className='price'>{item.price}</h4>
                </header>
                <p className='item-text'>{item.desc}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Menu;
