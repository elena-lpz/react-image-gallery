export default function Footer() {
  return (
    <footer className="p-10">
      <img
        className="w-screen object-cover"
        src="public/assets/bg-imgs/footer-ghibli.png"
        alt="Tree spirits or kodama from Princess Mononoke in the background with the studio ghibli logo on top"
      />
      <p className="flex justify-center pt-5 font-semibold text-gray-700">
        © 2005-2025 STUDIO GHIBLI Inc | Project designed and built by &nbsp;
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
