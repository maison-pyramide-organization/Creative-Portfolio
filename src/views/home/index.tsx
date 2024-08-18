import { useEffect } from "react";
// import s from "./_s.module.scss";
import getProjects from "@/services/api/projects";

const Home = () => {
  useEffect(() => {
    getProjects().then((projects) => {
      console.log(projects);
    });
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
