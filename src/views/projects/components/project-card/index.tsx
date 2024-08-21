import s from "./_s.module.scss";

interface Iprops {
  project: any;
}

const ProjectCard = (props: Iprops) => {
  const { name, thumbnail, year, services } = props.project;
  return (
    <div className={s.project}>
      <img src={thumbnail} alt="" />
      <h3>{name}</h3>
      <ul>
        {services.map((service, i) => (
          <li key={i}>{service}</li>
        ))}
      </ul>
      <div className={s.year}>({year})</div>
    </div>
  );
};
export default ProjectCard;
