import React from 'react';

const OffcanvasCloseButton = ({ onClose }) => {
  return (
    <div className="offcanvas__close">
      <button onClick={onClose}>
        <i className="fal fa-times"></i>
      </button>
    </div>
  );
};

export default OffcanvasCloseButton;
