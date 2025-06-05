export default function Buttons({ currentIndex, total, setIndex }) {
  const handleLeftClick = () => {
    const newIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;
    setIndex(newIndex);
  };

  const handleRightClick = () => {
    const newIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;
    setIndex(newIndex);
  };

  return (
    <div className="buttons">
      <button id="button-left" onClick={handleLeftClick}>
        ←
      </button>
      <button id="button-right" onClick={handleRightClick}>
        →
      </button>
    </div>
  );
}
