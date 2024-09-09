import getProjects from "@/services/api/projects";
import { createContext, useEffect, useState } from "react";

interface IprojectsContext {
  projects: any;
}

export const projectsContext = createContext<IprojectsContext | null>(null);

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState<any>(null);

  useEffect(() => {
    getProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <projectsContext.Provider value={{ projects }}>
      {children}
    </projectsContext.Provider>
  );
};

export default ProjectsProvider;
