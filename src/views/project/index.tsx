import s from "./_s.module.scss";
import { useEffect } from "react";
import projects from "@/data/projects";

const Project = () => {
  useEffect(() => {}, []);
  const project = projects[0];
  const { name, thumbnail, collage, intro, year, client, services } = project;

  return (
    <div className={s["p"]}>
      <h1 className={s.title}>{name}</h1>
      <div className={s.thumbnail}>
        <img src={thumbnail} alt="" />
      </div>

      <div className={s.info}>
        {/* CLIENT */}
        <div className={s.client}>
          <h3>CLIENT</h3>
          <p>{client}</p>
        </div>

        {/* YEAR */}
        <div className={s.year}>
          <h3>YEAR</h3>
          <p>{year}</p>
        </div>

        {/* SERVICES */}
        <div className={s.services}>
          <h3>SERVICES</h3>
          <ul>
            {services.map((service) => (
              <li>{service}</li>
            ))}
          </ul>
        </div>

        {/* INTRO */}
        <div className={s.intro}>
          <h3>INTRO</h3>
          <p>{intro}</p>
        </div>
      </div>

      <div className={s.collage}>
        {collage?.map((img) => (
          <img src={img} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Project;
