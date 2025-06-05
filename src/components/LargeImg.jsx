export default function LargeImg({ image }) {
  return (
    <>
      {image ? (
        <img
          key={image.id}
          src={image.url}
          alt={image.alt}
          className="large-image"
        />
      ) : null}
    </>
    //lots of help from David on this one, there was a rendering issue and the image would sometimes work and sometimes wouldn't because of the way it was being rendenred, giving me an empty array
  );
}
