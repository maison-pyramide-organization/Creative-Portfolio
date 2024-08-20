import s from "./_s.module.scss";

interface Iprops {
    project: any;
}

const FeaturedProject = (props: Iprops) => {
    const { thumbnail, name, year } = props.project;
    return (
        <div className={s["proj"]}>
            <img src={thumbnail} alt="" />
            <div>
                <h3>{name}</h3>
                <span>({year})</span>
            </div>
        </div>
    );
};
export default FeaturedProject;
