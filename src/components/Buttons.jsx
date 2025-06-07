export default function Buttons({ currentIndex, length, setIndex }) {
  const handleLeftClick = () => {
    const newIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
    setIndex(newIndex);
  };

  const handleRightClick = () => {
    const newIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;
    setIndex(newIndex);
  };

  return (
    <div className="m-4 flex gap-5 justify-between md:justify-end pt-4 mr-20 text-[var(--bg-colour-blue)]">
      <button className="" id="button-left" onClick={handleLeftClick}>
        <i className="text-3xl ml-20 fa-solid fa-arrow-left cursor-pointer"></i>
      </button>
      <button id="button-right" onClick={handleRightClick}>
        <i className="text-3xl fa-solid fa-arrow-right cursor-pointer"></i>
      </button>
    </div>
  );
}
