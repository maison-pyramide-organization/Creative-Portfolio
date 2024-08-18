import s from "./_s.module.scss";
import locations from "@/data/locations";
import { Location } from "./location";

const index = () => {
    return (
        <footer className={s["f"]}>
            <ul>
                {locations.map((location) => (
                    <li>
                        <Location location={location} />
                    </li>
                ))}
            </ul>

            <div>
                <span>WANT TO GET IN TOUCH WITH US ABOUT OUR SERVICES?</span>
                <button>GET IN CONTACT</button>
            </div>

            <div>
                <span>WANT TO CHECK OUT OUR OPEN JOB POSITIONS?</span>
                <button>APPLY HERE</button>
            </div>
        </footer>
    );
};
export default index;
