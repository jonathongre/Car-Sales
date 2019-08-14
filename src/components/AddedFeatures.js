import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = ({ car, remove }) => {
  return (
    <div className="content">
      <h6 class="subtitle is-4">Added features:</h6>
      {car.features.length ? (
        <ol type="3">
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item} remove={remove} />
          ))}
        </ol>
      ) : (
        <p class="subtitle is-5">You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
