import React from "react";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className="image-card" onClick={onClick}>
      <img
        src={image.download_url}
        alt={`By ${image.author}`}
        title={image.author}
        loading="lazy"
      />
    </div>
  );
};

export default ImageCard;
