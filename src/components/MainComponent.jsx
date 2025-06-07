// import LargeImg from "./LargeImg";
import Buttons from "./Buttons";
import ImgThumbnails from "./ImgThumbnails";
import { useEffect, useState } from "react";
import ImgModal from "./ImgModal";

export const MainComponent = () => {
  //declare useState()
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modal, setModal] = useState(false);

  //declare useEffect()

  // fetching images from API
  useEffect(() => {
    async function getImages() {
      const response = await fetch("https://ghibliapi.vercel.app/films/");
      const data = await response.json();
      //   console.log(data);
      setImages(data);
      setSelectedIndex(0);
    }
    getImages();
  }, []);

  // scrolling to selected thumbnail when index changed (we gave each image an id to be able to scroll this id into view. Similar to how I did the scroll to top button in week 1. Not sure if theres a better way of doing this...)
  useEffect(() => {
    const selected = document.getElementById(`image-${selectedIndex}`);
    if (selected) {
      selected.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  return (
    <div
      id="films"
      className="bg-[var(--bg-colour-green)] py-4 h-screen flex flex-col justify-center items-left "
    >
      {/* <LargeImg image={images[selectedIndex]} /> */}
      <h1 className="text-6xl pl-20 pt-10 text-[var(--bg-colour-blue)] font-regular pb-2">
        スタジオジブリの作品
      </h1>
      <h2 className=" text-2xl pl-20 text-gray-500 font-regular pb-10">
        Studio Ghibli's works
      </h2>
      {modal ? (
        <ImgModal
          image={images[selectedIndex]}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          setModal={setModal}
          length={images.length}
        />
      ) : null}
      {/* this is the same issue I was having when I was first using a largeImg component instead of a modal, so had to use a ternary operator to avoid the error.  Lots of help from David on this one originally, there was a rendering issue and the image would sometimes work and sometimes wouldn't because of the way it was being rendenred, giving me an empty array */}

      <div>
        <ImgThumbnails
          images={images}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          setModal={setModal}
        />
        <Buttons
          currentIndex={selectedIndex}
          length={images.length}
          setIndex={setSelectedIndex}
        />
      </div>
    </div>
  );
};
