export default function About() {
  return (
    <div
      id="about"
      className="h-auto py-10 gap-8 bg-[var(--bg-colour-blue)] flex flex-col justify-center items-center text-white text-al text-center "
    >
      <img src="public/assets/small-assets/sparkle-blue.png" alt="Sparkle" />
      <h1 className="font-semibold w-100 text-3xl">
        Welcome to the World of Studio Ghibli
      </h1>
      <p className="text-s font-light w-170 my-4 text-[var(--text-blue)] text-xl">
        Step into a world where forests whisper, spirits roam, and magic hides
        in plain sight. Studio Ghibli has captured the hearts of audiences
        around the globe with its breathtaking animation, unforgettable
        characters, and stories that blend wonder with wisdom. From the soaring
        skies of Howl's Moving Castle to the quiet strength of My Neighbor
        Totoro, each film invites you to slow down, dream deeper, and see the
        beauty in the everyday.
      </p>
      <p className="text-s font-light w-170 my-4 text-[var(--text-blue)] text-xl">
        Whether you're revisiting a favorite or discovering these timeless tales
        for the first time, there's always something new to feel, to learn, and
        to love.
      </p>
    </div>
  );
}
