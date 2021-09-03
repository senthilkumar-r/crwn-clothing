import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import SHOP_DATA from './shop.data';
const Shop = (props) => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

// Shop.propTypes = {};

export default Shop;
