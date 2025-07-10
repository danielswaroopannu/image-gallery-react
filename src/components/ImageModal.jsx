import React from "react";

const ImageModal = ({ image, onClose }) => {
   if (!image) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✖</button>
        <img src={image.download_url} alt={image.author} />
      </div>
    </div>
  )
};

export default ImageModal;
