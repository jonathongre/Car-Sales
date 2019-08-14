import React from 'react';

const AddedFeature = ({ feature, remove }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => remove(feature)} className="button is-small">X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
