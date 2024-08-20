import { useEffect, useState } from "react";
import s from "./_s.module.scss";
import { useLocation } from "react-router-dom";
import Menu from "../menu";

const Header = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        setIsMenuOpened(false);
    }, [pathname]);
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpened((prev) => !prev);
        document.getElementById("root")?.classList.toggle("menu-opened");
    };

    return (
        <>
            <header className={s["h"]}>
                <div className={s.logo}>
                    <span>MAISON PYRAMIDE</span>
                </div>
                <nav>
                    <div>home</div>
                    <div>projects</div>
                    <div>services</div>
                </nav>
                <div className={s.contact}>
                    <button>contact</button>
                </div>
                <button onClick={toggleMenu}>{isMenuOpened ? "CLOSE" : "MENU"}</button>
            </header>

            {isMenuOpened && <Menu />}
        </>
    );
};

export default Header;
