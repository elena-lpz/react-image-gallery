export default function ImgModal({
  image,
  selectedIndex,
  setSelectedIndex,
  setModal,
  length,
}) {
  const handleLeftClick = () => {
    const newIndex = selectedIndex === 0 ? length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
  };

  //   Used a similar logic to what I used for the gallery in week 2, this time using ternary operators for simplicity instead of if else

  const handleRightClick = () => {
    const newIndex = selectedIndex === length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
  };

  //Using stoppropagation below to close the modal when clicking anywhere but on the content (buttons, img etc) In this case we want it to close when clicking on the the wrapper div. Got this from a Youtube tutorial that can be found in the references list. Had to do a bit of digging as it was not exactly a tutorial but a sped up coding session so they did not explain why they were doing it, but pretty cool!

  return (
    <div
      onClick={() => setModal(false)}
      className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-4 rounded max-w-2xl md:max-w-6xl w-90 md:w-auto"
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-3">
          <img
            src={image.image}
            alt={image.title}
            className="w-auto md:w-1/2 object-contain max-h-[60vh] lg:max-h-[80vh] rounded"
          />

          <div className="w-auto bg-amber-50 p-4 rounded flex flex-col justify-start h-20 overflow-scroll md:h-auto md:overflow-auto">
            <h2 className="text-md md:text-xl font-bold mb-2">{image.title}</h2>
            <p className="italic text-xs md:text-sm mb-1">
              {image.original_title}
            </p>
            <p className="text-xs md:text-sm mb-3">{image.release_date}</p>
            <p className="text-xs md:text-sm text-gray-600 mb-2">
              {image.description}
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button onClick={handleLeftClick}>
            <i className="fa-solid fa-arrow-left cursor-pointer"></i>
          </button>
          <button onClick={handleRightClick}>
            <i className="fa-solid fa-arrow-right cursor-pointer"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
