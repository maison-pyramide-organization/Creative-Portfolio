import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Test from "./views/test";
import "@a/styles/global/index.scss";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Contact from "./layout/contact";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
            </Routes>
            <Contact />
            <Footer />
        </>
    );
};

export default App;
