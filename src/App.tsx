import "./assets/scss/_main.scss";
import Footer from "./compoments/Footer/Footer";
import Header from "./compoments/Header/Header";
import Blog from "./views/Blog/Blog";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import Portfolio from "./views/Portfolio/Portfolio";
import Resume from "./views/Resume/Resume";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="layout transition-flip-in-right">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
