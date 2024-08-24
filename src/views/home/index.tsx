import s from "./_s.module.scss";
import { useEffect } from "react";
import getProjects from "@/services/api/projects";
import services from "@/data/services";
import { Service } from "./components/service";
import VMob from "@a/images/v-mob.png";
// @ts-ignore
import MPCP from "@a/icons/mpcp-logo.svg?react";
import { Swiper, SwiperSlide } from "swiper/react";
import projects from "@/data/projects";
import FeaturedProject from "./components/f-project";
import "swiper/css";
import { useLocation } from "react-router-dom";

const Home = () => {
    let { hash } = useLocation();
    useEffect(() => {
        // Scroll to an anchor section
        if (hash) {
            hash = hash.slice(1);
            const section = document.getElementById(hash);
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }

        // getProjects().then((projects) => {
        //     console.log(projects);
        // });
    }, []);

    return (
        <div className="p">
            <div className={s["logo"]}>
                <MPCP />
            </div>

            <section className={s["s-f-projects"]}>
                <Swiper slidesPerView={"auto"} spaceBetween={24} centeredSlides={true} loop={true}>
                    {projects.map((project, i) => (
                        <SwiperSlide key={i} className={s["slide"]}>
                            <FeaturedProject project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className={s["s-intro"]}>
                <h1>WE HELP BUILDING EARLY-STAGE COMPANIES AND ACCELERATING LATER STAGE BRANDS.</h1>
                <div>
                    <img src={VMob} alt="" />
                </div>
            </section>
            <section id="services" className={s["s-services"]}>
                <h2>SERVICES</h2>
                {services.map((service) => (
                    <Service service={service} key={service.index} />
                ))}
            </section>
        </div>
    );
};

export default Home;
