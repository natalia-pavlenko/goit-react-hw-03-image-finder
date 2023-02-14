import React from 'react';
// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ gallery }) => {
  return (
    <>
      {gallery.map(({ webformatURL, id }) => {
        return (
          <li key={id}>
            <img src={webformatURL}  alt=''/>
          </li>
        );
      })}
    </>
  );
};

export default ImageGalleryItem;
