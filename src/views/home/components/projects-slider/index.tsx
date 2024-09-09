import s from "./_s.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import FeaturedProject from "../f-project";
import { useContext, useEffect } from "react";
import { viewportContext } from "@/context/viewport-context";
import { Link } from "react-router-dom";
// @ts-ignore
import Ichevron from "@a/icons/chevron.svg?react";
import { Navigation } from "swiper/modules";

interface Iprops {
    projects: project[];
}

const ProjectsSlider = (props: Iprops) => {
    const { projects } = props;
    const { breakpoint } = useContext(viewportContext) as any;
    const navigation = {
        nextEl: "#s_n_r",
        prevEl: "#s_n_l",
    };

    return (
        <>
            <Swiper
                slidesPerView="auto"
                spaceBetween={24}
                centeredSlides={breakpoint == "sm"}
                loop={true}
                navigation={navigation}
                modules={[Navigation]}
                allowTouchMove={breakpoint == "sm"}
            >
                {projects.map((project, i) => (
                    <SwiperSlide key={i} className={s["slide"]}>
                        <FeaturedProject project={project} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <nav className={`${s["n"]} d-o`}>
                <Link to="/projects">view all projects</Link>
                <div className={s["n_ctrls"]}>
                    <button type="button" id="s_n_l">
                        <Ichevron />
                    </button>
                    <button type="button" id="s_n_r">
                        <Ichevron />
                    </button>
                </div>
            </nav>
        </>
    );
};
export default ProjectsSlider;
