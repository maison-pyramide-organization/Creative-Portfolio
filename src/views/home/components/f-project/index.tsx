import s from "./_s.module.scss";
import { Link } from "react-router-dom";

interface Iprops {
    project: any;
}

const FeaturedProject = (props: Iprops) => {
    const { thumbnail, name, year, slug } = props.project;
    return (
        <Link to={`/projects/${slug}`} className={s["proj"]}>
            <div className={s["img-w"]}>
                <img src={thumbnail} alt="" />
            </div>
            <div className={s['info']}>
                <h3>{name}</h3>
                <span>({year})</span>
            </div>
        </Link>
    );
};
export default FeaturedProject;
