export default function ImgThumbnails({
  images,
  selectedIndex,
  setSelectedIndex,
  setModal,
}) {
  return (
    <div className="flex gap-1 overflow-scroll overflow-y-hidden">
      {images.map((image, index) => {
        const isSelected = index === selectedIndex;

        //learned this cool thing where you can conditionally assign a classname using a ternary operator in React and was able to asign a different colour to the border of the thumbnail when selected. So if our thumbnail is selected give it a border, if not, the border will be transparent (link in resources).

        // OnKeyDown to make the modal open when pressing Enter (link in the resources)

        return (
          <img
            key={image.id}
            id={`image-${index}`}
            src={image.image}
            alt={image.title}
            tabIndex="0"
            className={`cursor-pointer w-90 rounded-2xl max-h-[60vh] border-4 hover:opacity-80 transition-transform duration-600 ${
              isSelected ? "border-[var(--text-yellow)]" : "border-transparent"
            }`}
            onClick={() => {
              setSelectedIndex(index);
              setModal(true);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSelectedIndex(index);
                setModal(true);
              }
            }}
          />
        );
      })}
    </div>
  );
}
