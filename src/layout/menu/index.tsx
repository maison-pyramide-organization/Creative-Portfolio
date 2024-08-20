import s from "./_s.module.scss";
import { Link } from "react-router-dom";
import socials from "@/data/social";

const Menu = () => {
    return (
        <div className={s["menu"]}>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <a href="">PROJECTS</a>
                </li>
                <li>
                    <a href="">SERVICES</a>
                </li>
            </ul>

            <button>CONTACT</button>

            <div className={s["menu_b"]}>
                <div className={s["social"]}>
                    <a href={socials.ig}>INSTAGRAM</a>
                    <a href={socials.linkedin}>LINKEDIN</a>
                    <a href={socials.ig}>ESHOWROOM</a>
                    <a href={socials.linkedin}>EGO & EAST</a>
                </div>

                <div className={s["cr"]}>2024 ALL RIGHTS RESERVED</div>
            </div>
        </div>
    );
};
export default Menu;
