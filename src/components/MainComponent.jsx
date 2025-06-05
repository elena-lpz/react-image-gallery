import LargeImg from "./LargeImg";
import Buttons from "./Buttons";
import ImgThumbnails from "./ImgThumbnails";
import { useEffect, useState } from "react";

export const MainComponent = () => {
  //declare useState()
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  //declare useEffect()
  useEffect(() => {
    async function getImages() {
      const response = await fetch("https://week-6-api.vercel.app/api/images");
      const data = await response.json();
      //   console.log(data);
      setImages(data);
      setSelectedIndex(0);
    }
    getImages();
  }, []);

  return (
    <>
      <LargeImg image={images[selectedIndex]} />
      <ImgThumbnails images={images} />
      <Buttons
        currentIndex={selectedIndex}
        total={images.length}
        setIndex={setSelectedIndex}
      />
    </>
  );
};
