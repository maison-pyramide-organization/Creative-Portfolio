import s from "./_s.module.scss";
// @ts-ignore
import I_Chevron from "@a/icons/chevron.svg?react";

interface Iprops {
    location: any;
}
export const Location = (props: Iprops) => {
    const { city, email } = props.location;
    return (
        <div className={s["location"]}>
            <I_Chevron />
            <span>{city}</span>
            <span>{email}</span>
        </div>
    );
};
