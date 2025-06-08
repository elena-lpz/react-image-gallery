export default function Quote() {
  return (
    <section className="  gap-8 bg-[var(--bg-colour-purple)] h-auto py-10 px-5 md:py-20 flex flex-col justify-center items-center text-white text-al text-center  text-xl md:text-3xl">
      <img src="./assets/small-assets/sparkle-blue.png" alt="A sparkle" />
      <p className="font-light max-w-xl">
        I would like to make a film to tell children it's good to be alive.
      </p>
      <p className="font-semibold text-[var(--text-yellow)] ">Hayao Miyazaki</p>
      <img
        src="./assets/small-assets/howl-heart.png"
        alt="Howl holding his heart"
        className="pt-3 hover:scale-[1.1] transition-transform duration-600"
      />
    </section>
  );
}
