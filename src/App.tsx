import "./assets/scss/_main.scss";
import Footer from "./compoments/Footer/Footer";
import Header from "./compoments/Header/Header";
import Home from "./views/Home/Home";

const App = () => {
  return (
    <>
      <div className="layout transition-flip-in-right">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
