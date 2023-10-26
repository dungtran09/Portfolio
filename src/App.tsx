import "./assets/scss/_main.scss";
import Header from "./compoments/Header/Header";

const App = () => {
  return (
    <>
      <div className="layout transition-flip-in-right">
        <Header />
      </div>
    </>
  );
};

export default App;
