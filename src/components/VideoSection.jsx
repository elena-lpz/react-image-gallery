export default function VideoSection() {
  return (
    <section className="relative">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8ZJed_7Rdf0?autoplay=1&mute=1&controls=0&rel=0&playsinline=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="absolute top-0 left-0 w-screen h-screen object-cover"
      ></iframe>
    </section>
  );
}
