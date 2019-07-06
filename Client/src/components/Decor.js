import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import images from "./images";

const photos = [
    {
      src: images[0],
      width: 4,
      height: 3
    },
    {
      src: images[1],
      width: 1,
      height: 1
    },
    {
      src: images[2],
      width: 3,
      height: 4
    },
    {
      src: images[3],
      width: 3,
      height: 4
    },
    {
      src: images[4],
      width: 3,
      height: 4
    },
    {
      src: images[5],
      width: 4,
      height: 3
    },
    {
      src: images[6],
      width: 3,
      height: 4
    }
  ];
  

function Decor() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
  
    return (
      <div>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }


export default Decor;