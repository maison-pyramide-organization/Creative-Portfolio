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
                            <li key={service}>{service}</li>
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
                {collage?.map((img, i) => (
                    <img src={img} alt={name} key={i} />
                ))}
            </div>
            <div className={s["images"]}>
                {images.map((image) => (
                    <img src={image} alt={name} />
                ))}
            </div>
        </div>
    );
};

export default Project;
