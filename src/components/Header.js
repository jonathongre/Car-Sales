import React from 'react';

const Header = ({ car }) => {
  return (
    <div class="card">
      <div class="card-image">
        <figure className="image is-6by3">
          <img src={car.image} alt={car.name} />
        </figure>
      </div>
      <div class="card-content">
        <h2 class="title is-3">{car.name}</h2>
        <p class="subtitle is-5">Amount: ${car.price}</p>
      </div>
    </div>
  );
};

export default Header;
