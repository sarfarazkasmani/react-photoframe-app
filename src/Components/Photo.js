import React from "react";

const Photo = ({ finalPhoto, onRemovePhoto }) => {
  return (
    <figure className="figure">
      <img
        className="photo"
        src={finalPhoto.imageLink}
        alt={finalPhoto.description}
      />
      <figcaption>
        <p>{finalPhoto.description}</p>
      </figcaption>
      <div className="button-container">
        <button
          onClick={() => onRemovePhoto(finalPhoto)}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </figure>
  );
};

export default Photo;
