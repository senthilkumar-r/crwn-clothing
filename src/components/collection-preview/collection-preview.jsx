import React from 'react';
import PropTypes from 'prop-types';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {};

export default CollectionPreview;
