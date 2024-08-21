import s from "./_s.module.scss";
import projects from "@/data/projects";
import ProjectCard from "./components/project-card";

const Projects = () => {
  return (
    <div className="p">
      <div className={s.p_w}>
        <h1 className={s.heading}>PROJECTS</h1>
        <div className={s["projects"]}>
          {projects.map((project, i) => (
            <ProjectCard project={project} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
