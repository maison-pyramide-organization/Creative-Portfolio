import FeaturedProject from "../f-project";
import s from "./_s.module.scss";

interface Iprops {
    projects: project[];
}

const Slider = (props: Iprops) => {
    const { projects } = props;

    return (
        <>
            <div className={s["slider"]}>
                <div className={s["slider-w"]}>
                    {projects.map((project) => (
                        <div className={s["slide"]}>
                            {/* <img src={project.thumbnail} alt="" /> */}
                            <FeaturedProject project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Slider;
