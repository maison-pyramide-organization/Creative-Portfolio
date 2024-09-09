import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const animate = () => {
  new SplitType("#intro h1", { types: "words,lines" });

  gsap.from("#intro .word", {
    y: "100%",
    delay: ".5s",
    stagger: { amount: 0.6 },
  });

  //

  gsap.from("#vid", {
    scrollTrigger: {
      trigger: "#vid",
      scrub: 1,
      start: "top 90%",
    },
    width: "50%",
  });
};

export default animate;
