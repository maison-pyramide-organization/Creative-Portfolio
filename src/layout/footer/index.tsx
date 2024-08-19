import s from "./_s.module.scss";
import locations from "@/data/locations";
import { Location } from "./location";
import socials from "@/data/social";

const Footer = () => {
  return (
    <footer className={s["f"]}>
      <ul>
        {locations.map((location) => (
          <li>
            <Location location={location} />
          </li>
        ))}
      </ul>

      <div className={s["contact"]}>
        <span>WANT TO GET IN TOUCH WITH US ABOUT OUR SERVICES?</span>
        <button>GET IN CONTACT</button>
      </div>

      <div className={s["positions"]}>
        <span>WANT TO CHECK OUT OUR OPEN JOB POSITIONS?</span>
        <button>APPLY HERE</button>
      </div>

      <div className={s["socials"]}>
        <div>
          <a href={socials.ig}>INSTAGRAM</a>
          <span className={s.seprator} />
          <a href={socials.ig}>LINKEDIN</a>
        </div>
        <div>
          <a href={socials.ig}>E-SHOWROOM</a>
          <span className={s.seprator} />
          <a href={socials.ig}>EGO & EAST</a>
        </div>
      </div>

      <div className={s.cr}>2024 ALL RIGHTS RESERVED</div>
    </footer>
  );
};

export default Footer;
