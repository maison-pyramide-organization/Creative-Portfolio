import s from "./_s.module.scss";
import locations from "@/data/locations";
import { Location } from "./location";
import socials from "@/data/social";

const Footer = () => {
    return (
        <footer className={s["f"]}>
            <div className={s["f-t"]}>
                <ul>
                    {locations.map((location) => (
                        <li key={location.city}>
                            <Location location={location} />
                        </li>
                    ))}
                </ul>
                <div className={s["contact"]}>
                    <h4>WANT TO GET IN TOUCH WITH US ABOUT OUR SERVICES?</h4>
                    <button className="btn">GET IN CONTACT</button>
                </div>

                <div className={s["positions"]}>
                    <h4>WANT TO CHECK OUT OUR OPEN JOB POSITIONS?</h4>

                    <button className="btn">APPLY HERE</button>
                </div>
            </div>

            <div className={s["f-b"]}>
                <div className={s["socials"]}>
                    <a className="link" href={socials.ig} target="_blank">
                        <div>INSTAGRAM</div>
                    </a>
                    <a className="link" href={socials.ig} target="_blank">
                        <div>LINKEDIN</div>
                    </a>
                    <a className="link" href={socials.ig} target="_blank">
                        <div>E-SHOWROOM</div>
                    </a>
                    <a className="link" href={socials.ig} target="_blank">
                        <div>EGO & EAST</div>
                    </a>
                </div>

                <div className={s.cr}>2024 ALL RIGHTS RESERVED</div>
            </div>
        </footer>
    );
};

export default Footer;
