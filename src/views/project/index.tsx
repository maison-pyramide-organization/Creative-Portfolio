import s from "./_s.module.scss";
import { useEffect, useState } from "react";
import projects from "@/data/projects";
import { useParams } from "react-router-dom";

const Project = () => {
    const { slug } = useParams();
    const [project, setProject] = useState<null | project>(null);

    useEffect(() => {
        const project = projects.find((p) => p.slug == slug) || null;
        setProject(project);
    }, []);

    if (!project) return null;
    const { name, thumbnail, collage, intro, year, client, services, images } = project;

    return (
        <div className={s["p"]}>
            <h1>{name}</h1>
            <div className={s.thumbnail}>
                <img src={thumbnail} alt={name} />
            </div>

            {/* INFO */}
            <div className={s.info}>
                {/* CLIENT */}
                <div className={s["info_g"]}>
                    <div className={s["info_item"]}>
                        <h3>CLIENT</h3>
                        <p className={s["info_text"]}>{client}</p>
                    </div>

                    {/* YEAR */}
                    <div className={s["info_item"]}>
                        <h3>YEAR</h3>
                        <p className={s["info_text"]}>{year}</p>
                    </div>

                    {/* SERVICES */}
                    <div className={s["info_item"]}>
                        <h3>SERVICES</h3>
                        <ul>
                            {services.map((service) => (
                                <li key={service} className={s["info_text"]}>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* INTRO */}
                <div className={s["intro"]}>
                    <div className={s["info_item"]}>
                        <h3>INTRO</h3>
                        <p className={s["info_text"]}>{intro}</p>
                    </div>
                </div>
            </div>

            {/* COLLAGE */}
            <div className={s.collage}>
                {collage?.map((img, i) => (
                    <img src={img} alt={name} key={i} />
                ))}
            </div>
            {/* IMAGES */}
            <div className={s["images"]}>
                {images.map((img, i) => (
                    <img src={img} alt={name} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Project;
