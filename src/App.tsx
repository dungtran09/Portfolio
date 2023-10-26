import "./assets/scss/_main.scss";
import Footer from "./compoments/Footer/Footer";
import Header from "./compoments/Header/Header";
import Home from "./views/Home/Home";
import Resume from "./views/Resume/Resume";

const App = () => {
  return (
    <>
      <div className="layout transition-flip-in-right">
        <Header />
        <main>
          <Resume />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
