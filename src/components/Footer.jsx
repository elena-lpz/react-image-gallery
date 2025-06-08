export default function Footer() {
  return (
    <footer className=" p-4 md:p-10 ">
      <div className="relative ">
        <img
          className=" w-screen object-cover max-h-200 rounded-4xl"
          src="./assets/bg-imgs/mononoke023.jpg"
          alt="Tree spirits or kodama from Princess Mononoke"
        />
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 max-w-50 md:max-w-80 lg:max-w-200 h-auto object-contain"
          src="./assets/logos/studio-ghibli-logo-white.png"
          alt="Studio Ghibli logo in white"
        />
      </div>
      <p className="flex flex-wrap justify-center pt-5 font-semibold text-sm md:text-lg text-gray-700">
        © 2005-2025 STUDIO GHIBLI Inc
      </p>

      <p className="flex flex-wrap justify-center pt-1 font-semibold text-xs md:text-md text-gray-600">
        Project designed and built by &nbsp;
        <a
          className="text-fuchsia-950"
          href="https://github.com/elena-lpz/react-image-gallery"
        >
          Elena
        </a>
      </p>
    </footer>
  );
}
