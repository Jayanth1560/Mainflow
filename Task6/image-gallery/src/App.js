import React from 'react';
import Gallery from './src/components/Gallery'; // Import your Gallery component

const images = [
  { id: 1, src: 'img1.jpg', alt: 'Image 1' },
    { id: 2, src: 'image2.jpg', alt: 'Image 2' },
    // Add more image objects here
  // Replace with your image data (objects with src, alt properties)
];

const App = () => {
  return (
    <div className="App">
      <Gallery images={images} />
    </div>
  );
};

export default App;
