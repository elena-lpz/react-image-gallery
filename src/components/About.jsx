export default function About() {
  return (
    <section
      id="about"
      className="relative h-auto pt-10 gap-8 bg-[var(--bg-colour-blue)] flex flex-col justify-center items-center text-white text-al text-center "
    >
      <img src="./assets/small-assets/sparkle-yellow.png" alt="Sparkle" />
      <h1 className="font-semibold w-60 text-2xl md:text-3xl text-[var(--text-blue)]">
        The World of Studio Ghibli
      </h1>
      <p className="font-light text-white max-w-3xl text-base w-80 md:w-120 2xl:w-180 sm:w-100 md:text-xl z-10">
        Step into a world where forests whisper, spirits roam, and magic hides
        in plain sight. Studio Ghibli has captured the hearts of audiences
        around the globe with its breathtaking animation, unforgettable
        characters, and stories that blend wonder with wisdom. From the soaring
        skies of Howl's Moving Castle to the quiet strength of My Neighbor
        Totoro, each film invites you to slow down, dream deeper, and see the
        beauty in the everyday.
      </p>
      <p className="font-light text-white max-w-3xl text-base w-80 md:w-120 2xl:w-180 sm:w-100 md:text-xl z-10">
        Whether you're revisiting a favorite or discovering these timeless tales
        for the first time, there's always something new to feel, to learn, and
        to love.
      </p>
      <img
        src="./assets/small-assets/polaroid-ponyo.png"
        alt="Polaroid of Ponyo in a jar"
        className="hover:scale-[1.1] transition-transform duration-600 absolute -top-10 -left-10 hidden lg:block max-h-[40vh] xl:max-h-[60vh]"
      />

      <img
        src="./assets/small-assets/polaroid-howl.png"
        alt="Polaroid of Ponyo in a jar"
        className="hover:scale-[1.1] transition-transform duration-600 absolute -top-30 right-0 hidden lg:block max-h-[40vh] xl:max-h-[60vh]"
      />
      <img
        src="./assets/small-assets/polaroid-mononoke.png"
        alt="Polaroid of Princess Mononoke"
        className="hover:scale-[1.1] transition-transform duration-600 absolute hidden lg:block lg:-bottom-50 xl:-bottom-150 -left-10 max-h-[40vh] xl:max-h-[60vh]"
      />

      <img
        src="./assets/small-assets/polaroid-arrietty.png"
        alt="Polaroid of Arrietty"
        className="hover:scale-[1.1] transition-transform duration-600 absolute lg:-bottom-40 xl:-bottom-90  right-0 hidden lg:block max-h-[40vh] xl:max-h-[60vh]"
      />
    </section>
  );
}
