import { useEffect } from "react";
import s from "./_s.module.scss";
import animate from "./_animation";

const Contact = () => {
  useEffect(() => {
    animate();
  }, []);
  return (
    <section className={s["s-contact"]}>
      <h2>
        LET'S TALK ABOUT THE IMPACT YOU’D LIKE TO MAKE AND BLOW YOUR AUDIENCE'S
        COLLECTIVE MIND.
      </h2>
      <button>BECOME AN MP CLIENT</button>
      <div id="pyramide" className={s["pyramide"]} />
    </section>
  );
};
export default Contact;
