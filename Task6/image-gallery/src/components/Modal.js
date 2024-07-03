import React from 'react';
// import ReactDOM from 'react-dom'; // Not needed in this component

import 'react-modal/dist/react-modal.css'; // Import CSS for modal styles (only import once)

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: 0,
  },
};

const Modal = ({ image, onClose }) => {
  return (
    <ModalProvider>
      <div style={customStyles}>
        <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
        <button onClick={onClose}>Close</button>
      </div>
    </ModalProvider>
  );
};

export default Modal;
