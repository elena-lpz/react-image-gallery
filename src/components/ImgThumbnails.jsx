export default function ImgThumbnails({ images }) {
  return (
    <div className="thumbnails">
      {images.map((image) => (
        <img key={image.id} src={image.url} alt={image.alt} />
      ))}
    </div>
  );
}
