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
    <div className="my-4 flex gap-5 justify-end pt-4 mr-6 md:mr-20">
      <button
        id="button-left"
        aria-label="previous image"
        onClick={handleLeftClick}
      >
        <i className="text-3xl  fa-solid fa-arrow-left cursor-pointer hover:text-[var(--bg-colour-blue)] text-[var(--bg-colour-purple)]"></i>
      </button>
      <button
        id="button-right"
        aria-label="Next image"
        onClick={handleRightClick}
      >
        <i className="text-3xl fa-solid fa-arrow-right cursor-pointer hover:text-[var(--bg-colour-blue)] text-[var(--bg-colour-purple)]"></i>
      </button>
    </div>
  );
}
