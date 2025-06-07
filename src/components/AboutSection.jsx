import About from "./About";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

const ParallaxImages = () => {
  return (
    <div className="mx-auto w-screen px-4 pt-[200px] bg-[var(--bg-colour-blue)] ">
      <ParallaxImg
        src="./assets/small-assets/polaroid-arrietty.png"
        alt="Polaroid of Arrietty"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="./assets/small-assets/polaroid-howl.png"
        alt="Polaroid of Howl's moving castle"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="./assets/small-assets/polaroid-mononoke.png"
        alt="Polaroid of Princess Mononoke"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="./assets/small-assets/polaroid-ponyo.png"
        alt="Polaroid of Ponyo"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const SECTION_HEIGHT = 1500;

export default function AboutSection() {
  return (
    <>
      <About2 />

      <img
        className="w-screen h-screen object-cover"
        src="./assets/bg-imgs/howl-moving-castle.jpg"
        alt="Howl's castle in the sky"
      />
    </>
  );
}

const About2 = () => {
  return (
    <>
      <About />
      <ParallaxImages />

      <img
        className="w-screen h-screen object-cover"
        src="./assets/bg-imgs/howl-moving-castle.jpg"
        alt="Howl's castle in the sky"
      />
    </>
  );
};
