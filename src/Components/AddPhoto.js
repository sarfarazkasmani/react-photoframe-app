import React from "react";
import { Link } from "react-router-dom";

const AddPhoto = ({ onAddPhoto }) => {
  function handleSubmit(event) {
    event.preventDefault();
    const imgLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const photo = {
      id: 0,
      description: description,
      imageLink: imgLink,
    };
    if (imgLink && description) {
      onAddPhoto(photo);
    }
  }
  return (
    <>
      <Link to="/">
        <h1>PhotoFrame</h1>
      </Link>
      <div onSubmit={handleSubmit} className="form">
        <form>
          <input type="text" name="link" />
          <input type="text" name="description" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddPhoto;
