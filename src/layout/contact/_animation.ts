import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const animate = () => {
  gsap.from("#pyramide", {
    scrollTrigger: {
      trigger: "#pyramide",
      scrub: 1,
      start: "start bottom",
      end: "center center",
    },
    height: 0,
    ease: "sine.inOut",
  });
};

export default animate;
