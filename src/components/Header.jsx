import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  //Hamburger menu (I like adding the comments before the return because they look tidier to me)

  //I was originally not going to add this as there's only 2 links, but could not think of a better way of displaying the links on mobile since the logo was in the middle and not the left of the screen (yes, I did design it this way and I could easily change it but let's ignore that)

  //I found a tutorial on medium that did pretty much what I needed but they also create the hamburguer menu using css and give it a fancy animation. I had already installed font awesome icons so I thought I could do it faster this way without having to update the css file.

  // Menu only shows for screens over a certain size md:hidden
  // we toggle between open and close by using a ternary operator: if menuOpen is true set it to false and viceversa
  // if the menu is open we show a X if it's closed we show the hamburger menu
  // finally we need to add the links to the open menu (i kept everything the same for desktop) If the menu is open show the dropdown if not show nothing

  return (
    <header>
      <nav className="flex justify-evenly items-center my-4 md:my-6 relative">
        <div className="md:hidden absolute right-5 top-1/2 transform -translate-y-1/2">
          <button
            onClick={() => setMenuOpen(menuOpen ? false : true)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <i className="fa-solid fa-xmark  text-gray-700"></i>
            ) : (
              <i className="fa-solid fa-bars  text-gray-700"></i>
            )}
          </button>
        </div>

        <a
          className="hidden md:inline hover:text-sky-700 font-medium"
          href="#about"
        >
          ABOUT
        </a>
        <img
          src="./assets/logos/logo-black.png"
          className="h-10 md:h-20 w-auto"
          alt="Studio Ghibli logo"
        />
        <a
          className="hidden md:inline hover:text-sky-700 font-medium"
          href="#films"
        >
          FILMS
        </a>
      </nav>

      {menuOpen ? (
        <div className="flex flex-col items-center space-y-4 pb-4 md:hidden font-medium text-gray-700">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-sky-700"
          >
            ABOUT
          </a>
          <a
            href="#films"
            onClick={() => setMenuOpen(false)}
            className="hover:text-sky-700"
          >
            FILMS
          </a>
        </div>
      ) : null}
    </header>
  );
}
