export default function Header() {
  return (
    <header>
      <nav className="flex justify-evenly items-center my-4">
        <a className="hover:text-sky-700 font-medium" href="#about">
          ABOUT
        </a>
        <img src="public/assets/logos/logo-black.png" />
        <a className="hover:text-sky-700 font-medium" href="#films">
          FILMS
        </a>
      </nav>
    </header>
  );
}
