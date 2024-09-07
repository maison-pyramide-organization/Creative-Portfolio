import s from "./_s.module.scss";
import image from "@a/images/project/4.png";

interface Iprops {
    service: any;
}
export const Service = (props: Iprops) => {
    const { index, category, services } = props.service;

    return (
        <div className={s.service}>
            {/* HEADER */}
            <div>
                <span>{index}</span>
                <div className={s.title_w}>
                    <div className={s["img-c"]}>
                        <img src={image} alt="" />
                    </div>
                    <h3>{category}</h3>
                </div>
            </div>

            {/* SERVICES */}
            <ul>
                {services.map((service) => (
                    <li key={service}>{service}</li>
                ))}
            </ul>
        </div>
    );
};
