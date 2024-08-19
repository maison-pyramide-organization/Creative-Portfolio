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
      <div>
        <I_Chevron />
        <span>{city}</span>
      </div>
      <span className={s.email}>{email}</span>
    </div>
  );
};
