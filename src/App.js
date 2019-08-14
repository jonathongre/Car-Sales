import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { buyItem, removeFeature } from './store/actions';

const App = ({ buyItem, removeFeature, car, store, additionalPrice }) => {
  

  const removeCarFeature = item => {
    // dispatch an action here to remove an item
    removeFeature(item)
  };

  const buyCarItem = item => {
    // dipsatch an action here to add an item
    buyItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  }
}

export default connect(
  mapStateToProps,
  { buyItem, removeFeature }
)(App)