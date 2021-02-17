import React from "react";
import Photo from "./Photo";
import { Link } from "react-router-dom";

const PhotoFrame = ({ PhotoBlock, onRemovePhoto }) => {
  return (
    <>
      <Link className="addIcon" to="/AddPhoto"></Link>

      <div className="photo-grid">
        {PhotoBlock.map((singlePhoto) => (
          <Photo finalPhoto={singlePhoto} onRemovePhoto={onRemovePhoto} />
        ))}
      </div>
    </>
  );
};

export default PhotoFrame;
