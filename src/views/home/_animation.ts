import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const animate = () => {
  const text = new SplitType("#intro h1", { types: "words,lines" });

  gsap.from("#intro .word", {
    y: "100%",
    delay: ".5s",
    stagger: { amount: 0.6 },
  });

  gsap.to("#vid", {
    scrollTrigger: {
      trigger: "#vid",
      scrub: 1,
      // start: "top center",
      // pin: true,
    },
    width: "100%",
  });
};

export default animate;
