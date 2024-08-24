import s from "./_s.module.scss";
import locations from "@/data/locations";
import { Location } from "./location";
import socials from "@/data/social";

const Footer = () => {
    return (
        <footer className={s["f"]}>
            <ul>
                {locations.map((location) => (
                    <li key={location.city}>
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
                <a href={socials.ig} target="_blank">
                    INSTAGRAM
                </a>
                <a href={socials.ig} target="_blank">
                    LINKEDIN
                </a>
                <a href={socials.ig} target="_blank">
                    E-SHOWROOM
                </a>
                <a href={socials.ig} target="_blank">
                    EGO & EAST
                </a>
            </div>

            <div className={s.cr}>2024 ALL RIGHTS RESERVED</div>
        </footer>
    );
};

export default Footer;
