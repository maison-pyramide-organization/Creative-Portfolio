import { Swiper, SwiperSlide } from "swiper/react";
import s from "./_s.module.scss";
import FeaturedProject from "../f-project";
import { useContext } from "react";
import { viewportContext } from "@/context/viewport-context";

interface Iprops {
    projects: project[];
}

const ProjectsSlider = (props: Iprops) => {
    const { projects } = props;
    const { breakpoint } = useContext(viewportContext) as any;

    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={24}
                centeredSlides={breakpoint == "sm"}
                loop={true}
            >
                {projects.map((project, i) => (
                    <SwiperSlide key={i} className={s["slide"]}>
                        <FeaturedProject project={project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
export default ProjectsSlider;
