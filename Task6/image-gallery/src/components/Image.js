import React from 'react';

const Image = ({ image, onClick }) => {
  return (
    <div className="image-container" onClick={onClick}>
      <img src={image.src} alt={image.alt} />
    </div>
  );
};

export default Image;
