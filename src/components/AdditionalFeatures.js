import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = ({ store, add }) => {
  return (
    <div className="content">
      <h4 class="title is-4">Additional Features</h4>
      {store.length ? (
        <ol type="3">
          {store.map(item => (
            <AdditionalFeature key={item.id} feature={item} {...item} add={add} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
