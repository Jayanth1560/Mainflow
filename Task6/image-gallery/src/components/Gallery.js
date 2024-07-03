import React, { useState } from 'react';
import Image from './Image';
import Modal from './Modal';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="gallery">
      {images.map((image) => (
        <Image key={image.id} image={image} onClick={() => openModal(image)} />
      ))}
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default Gallery;
