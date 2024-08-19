import s from "./_s.module.scss";
import socials from "@/data/social";

const Menu = () => {
  return (
    <div className={s["menu"]}>
      <ul>
        <li>HOME</li>
        <li>PROJECTS</li>
        <li>SERVICES</li>
      </ul>
      <button>CONTACT</button>

      <div className={s["social"]}>
        <a href={socials.ig}>INSTAGRAM</a>
        <span>|</span>
        <a href={socials.linkedin}>LINKEDIN</a>
      </div>
      <div className={s["social"]}>
        <a href={socials.ig}>ESHOWROOM</a>
        <span>|</span>
        <a href={socials.linkedin}>EGO & EAST</a>
      </div>

      <span>2024 ALL RIGHTS RESERVED</span>
    </div>
  );
};
export default Menu;
