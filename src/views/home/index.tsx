import s from "./_s.module.scss";
import { useContext, useEffect } from "react";
// import getProjects from "@/services/api/projects";
import services from "@/data/services";
import { Service } from "./components/service";
import VMob from "@a/images/v-mob.png";
// @ts-ignore
import MPCP from "@a/icons/mpcp-logo.svg?react";
// import projects from "@/data/projects";
import "swiper/css";
import { useLocation } from "react-router-dom";
import ProjectsSlider from "./components/projects-slider";
import animate from "./_animation";
// import Slider from "./components/slider";
import { projectsContext } from "@/context/projects";

const Home = () => {
  let { hash } = useLocation();
  const { projects } = useContext(projectsContext) as any;

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
    //   console.log("p", projects);
    // });
  }, [hash]);

  useEffect(() => {
    if (projects) animate();
  }, [projects]);

  if (!projects) return null;

  return (
    <div className="p">
      <div className={s["logo"]}>
        <MPCP />
      </div>

      <section className={s["s-f-projects"]}>
        <ProjectsSlider projects={projects} />
        {/* <Slider projects={projects} /> */}
      </section>

      <section id="intro" className={s["s-intro"]}>
        <h1>
          WE HELP BUILDING EARLY-STAGE COMPANIES AND ACCELERATING LATER STAGE
          BRANDS.
        </h1>
        <div className={s.vid_w}>
          <img id="vid" src={VMob} alt="" />
        </div>
      </section>
      <section id="services" className={s["s-services"]}>
        <h2>SERVICES</h2>
        <div>
          {services.map((service) => (
            <Service service={service} key={service.index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
