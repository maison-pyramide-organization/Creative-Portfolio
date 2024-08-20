import s from "./_s.module.scss";
import { useEffect } from "react";
import getProjects from "@/services/api/projects";
import services from "@/data/services";
import { Service } from "./components/service";
import VMob from "@a/images/v-mob.png";
// @ts-ignore
import MPCP from "@a/icons/mpcp-logo.svg?react";

const Home = () => {
    useEffect(() => {
        getProjects().then((projects) => {
            console.log(projects);
        });
    }, []);

    return (
        <div className="p">
            <div className={s["logo"]}>
                <MPCP />
            </div>
            <div>
                <section className={s["s-intro"]}>
                    <h1>
                        WE HELP BUILDING EARLY-STAGE COMPANIES AND ACCELERATING LATER STAGE BRANDS.
                    </h1>
                    <div>
                        <img src={VMob} alt="" />
                    </div>
                </section>
                <section className={s["s-services"]}>
                    <h2>SERVICES</h2>
                    {services.map((service) => (
                        <Service service={service} key={service.index} />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Home;
