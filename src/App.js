import React, { useState } from "react";
import "./App.css";
import Title from "./Components/Title";
import PhotoFrame from "./Components/PhotoFrame";
import AddPhoto from "./Components/AddPhoto";
import { Route } from "react-router-dom";

function App() {
  const [allPhotos, setAllPhoto] = useState([
    {
      id: "0",
      description: "beautiful sea",
      imageLink: "https://picsum.photos/800/600?image=14",
    },
    {
      id: "1",
      description: "Coffee cup",
      imageLink: "https://picsum.photos/800/600?image=30",
    },
    {
      id: "2",
      description: "Freedom",
      imageLink: "https://picsum.photos/800/600?image=50",
    },
    {
      id: "3",
      description: "Farm",
      imageLink: "https://picsum.photos/800/600?image=85",
    },
  ]);

  function removePhoto(photoRemoved) {
    setAllPhoto(allPhotos.filter((photo) => photo !== photoRemoved));
  }
  function addPhoto(photoSubmitted) {
    setAllPhoto(allPhotos.concat([photoSubmitted]));
  }

  return (
    <>
      <Route
        exact
        path="/"
        component={() => (
          <>
            <Title title="PhotoFrame" />
            <PhotoFrame PhotoBlock={allPhotos} onRemovePhoto={removePhoto} />
          </>
        )}
      />
      <Route
        exact
        path="/AddPhoto"
        component={({ history }) => (
          <>
            <AddPhoto
              onAddPhoto={(addedPhoto) => {
                addPhoto(addedPhoto);
                history.push("/");
              }}
            />
          </>
        )}
      />
    </>
  );
}

export default App;
