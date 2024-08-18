import s from "./_s.module.scss";

const Header = () => {
    return (
        <>
            <header className={s['h']}>
                <div>
                    <span>MAISON PYRAMIDE</span>
                </div>
                <ul>
                    <li>home</li>
                    <li>projects</li>
                    <li>services</li>
                </ul>
                <div>
                    <button>contact</button>
                </div>
                <button>menu</button>
            </header>
        </>
    );
};

export default Header;
