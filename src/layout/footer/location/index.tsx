import { useState } from "react";
import s from "./_s.module.scss";
// @ts-ignore
import I_Chevron from "@a/icons/chevron.svg?react";

interface Iprops {
    location: any;
}
export const Location = (props: Iprops) => {
    const { city, email } = props.location;
    const [isLocationVis, setIsLocationVis] = useState<boolean>(false);
    const toggleLocation = () => {
        setIsLocationVis((prev) => !prev);
    };

    return (
        <div className={isLocationVis ? "active" : ""}>
            <div onClick={toggleLocation} className={s["location"]}>
                <I_Chevron />
                <span>{city}</span>
            </div>
            <div className={`${s.email}`}>{email}</div>
        </div>
    );
};
