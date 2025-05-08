import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const categories = [
    { name: 'Center Tables', image: 'center-tables/cover.jpg' },
    { name: 'Curtains', image: 'curtains/cover.jpg' },
    { name: 'Mandir', image: 'mandir/cover.jpg' },
    { name: 'Sofa Chairs', image: 'sofa-chairs/cover.jpg' },
    { name: 'Sofas', image: 'sofas/cover.jpg' },
    { name: 'TV Units', image: 'tv-units/cover.jpg' },
  ];

  return (
    <div className="home">
      <div className="banner">
        <h1>Your Dream Furniture Store</h1>
      </div>

      <div className="welcome">
        <h2>Welcome to our store</h2>
        <p>Find the perfect blend of comfort and style.</p>
      </div>

      <div className="categories">
        <h3>Explore Our Collections</h3>
        <div className="category-grid">
          {categories.map((cat, idx) => (
            <Link
              to={`/products/${cat.name.toLowerCase().replace(/ /g, '-')}`}
              key={idx}
              className="category-link"
            >
              <div className="category-cover">
                <img src={`/images/${cat.image}`} alt={cat.name} />
                <div className="category-title">{cat.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
