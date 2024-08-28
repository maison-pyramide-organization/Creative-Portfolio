import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Test from "./views/test";
import "@a/styles/global/index.scss";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Contact from "./layout/contact";
import Projects from "./views/projects";
import Project from "./views/project";

const App = () => {
  return (
    <>
      <Header />
      <div className="p-w">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<Project />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Contact />
      </div>
      <div className="f_w">
        <div className="s" />
        <Footer />
      </div>
    </>
  );
};

export default App;
