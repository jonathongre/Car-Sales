import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={e => props.add(e, props.feature)} className="button is-medium">Add</button>
      <p class="subtitle is-4">{props.feature.name} (+${props.feature.price})</p>
    </li>
  );
};

export default AdditionalFeature;
