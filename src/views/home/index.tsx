import s from "./_s.module.scss";
import { useEffect } from "react";
import getProjects from "@/services/api/projects";
import services from "@/data/services";
import { Service } from "./components/service";
import Footer from "@/layout/footer";
import Header from "@/layout/header";

const Home = () => {
  useEffect(() => {
    getProjects().then((projects) => {
      // console.log(projects);
    });
  }, []);

  return (
    <div>
      <Header />
      <section className={s["s-services"]}>
        <h2>SERVICES</h2>
        {services.map((service) => (
          <Service service={service} key={service.index} />
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Home;
