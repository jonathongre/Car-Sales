import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { buyItem, removeFeature } from './store/actions';

const App = ({ buyItem, removeFeature, car, store, additionalPrice }) => {
  

  const removeCarFeature = id => {
    // dispatch an action here to remove an item
    removeFeature(id)
  };

  const buyCarItem = (e, item) => {
    // dipsatch an action here to add an item
    e.preventDefault()
    buyItem(item)
  };

  return (
    <div className="boxes">
      <div className="box box-1">
        <Header car={car} />
        <AddedFeatures car={car} remove={removeCarFeature}/>
      </div>
      <div className="box box-2">
        <AdditionalFeatures store={store} add={buyCarItem}/>
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