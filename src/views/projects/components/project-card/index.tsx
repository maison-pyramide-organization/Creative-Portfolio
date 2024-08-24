import s from "./_s.module.scss";
import { Link } from "react-router-dom";

interface Iprops {
    project: any;
}

const ProjectCard = (props: Iprops) => {
    const { name, thumbnail, year, services, slug } = props.project;
    return (
        <Link to={`/projects/${slug}`} >
            <img src={thumbnail} alt="" />
            <div className={s["info"]}>
                <h3>{name}</h3>
                <div>{services[0]}</div>
                <div>({year})</div>
            </div>
            {/* <ul>
        {services.map((service, i) => (
          <li key={i}>{service}</li>
        ))}
      </ul> */}
        </Link>
    );
};
export default ProjectCard;
